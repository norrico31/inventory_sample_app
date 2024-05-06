'use strict';
const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Role = sequelize.define('role', {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	  },
	description: {
		type: DataTypes.STRING,
	},
  }, {
    timestamps: true,
    sequelize,
    modelName: 'Role',
});

module.exports = Role