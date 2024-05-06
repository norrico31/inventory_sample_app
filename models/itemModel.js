'use strict';
const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Item = sequelize.define('item', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    // user_id: {
    //   type: DataTypes.UUID,
    //   references: {
    //     model: 'User',
    //     key: 'id'
    //   },
    //   onUpdate: 'CASCADE',
    //   onDelete: 'SET NULL'
    // },
    // uuid: {
    //   type: DataTypes.UUID,        
    //   defaultValue: DataTypes.UUIDV4
    // },
    sku: {
      type: DataTypes.STRING,
      unique: true
    },
    qty: {
      type: DataTypes.INTEGER
    },
    minStockLvl: {
      type: DataTypes.INTEGER
    },
    category: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING,
      // unique: true
    },
    short_description: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    cost: {
      type: DataTypes.DECIMAL(10, 2),
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    discounted_price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    tag: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    batch_no: {
      type: DataTypes.STRING,
    }
    // location: {
    //   type: DataTypes.STRING
    // },
    // expirationDate: { type: DataTypes.DATEONLY },
    // barcode: { type: DataTypes.STRING }
    // imgSrc: {
    //   type: DataTypes.STRING
    // },
    // brand: {
    //   allowNull: false,
    //   type: DataTypes.STRING
    // },
    // reviews: {
    //   type: DataTypes.STRING,
    // },
    // numReviews: {
    //   type: DataTypes.INTEGER,
    // },
}, {
    timestamps: true,
    sequelize,
    modelName: 'Item',
})

module.exports = Item