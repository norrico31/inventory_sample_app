'use strict';

const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const User = require('./userModel')
const Role = require('./roleModel')
const Item = require('./itemModel')

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Role = Role;
db.Item = Item;

// Role -> User
db.User.belongsTo(db.Role, {foreignKey: 'role_id', sourceKey: 'id'});
db.Role.hasOne(db.User, {foreignKey: 'role_id', sourceKey: 'id'});

// User -> Item
// db.User.hasOne(db.Item, {foreignKey: 'user_id', sourceKey: 'id'})
// db.Item.belongsTo(db.User, {foreignKey: 'user_id', sourceKey: 'id'})

module.exports = db;