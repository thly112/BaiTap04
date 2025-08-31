const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALT_ROUNDS = 10;

function strip(user) {
  const obj = user.toJSON();
  delete obj.password;
  return obj;
}

async function registerUser({ email, password, name }) {
  const existed = await User.findOne({ where: { email } });
  if (existed) throw new Error('Email đã được sử dụng');
  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  const user = await User.create({ email, password: hash, name });
  return strip(user);
}

async function loginUser({ email, password }) {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('Email hoặc mật khẩu không đúng');
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error('Email hoặc mật khẩu không đúng');
  const token = jwt.sign({ uid: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '2h' });
  return { token, user: strip(user) };
}

module.exports = { registerUser, loginUser, strip };

