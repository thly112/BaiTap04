const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.mysql');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM('user','admin'), defaultValue: 'user' },
}, {
  tableName: 'users',
  timestamps: true
});

module.exports = User;
