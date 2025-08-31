const { registerUser, loginUser, strip } = require('../services/userService');
const User = require('../models/user');

async function register(req, res) {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ user });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

async function login(req, res) {
  try {
    const { token, user } = await loginUser(req.body);
    res.json({ token, user });
  } catch (e) {
    res.status(401).json({ error: e.message });
  }
}

async function me(req, res) {
  const user = await User.findByPk(req.user.uid);
  res.json({ user: strip(user) });
}

function home(req, res) {
  res.json({ message: `Welcome ${req.user.uid}` });
}

module.exports = { register, login, me, home };
