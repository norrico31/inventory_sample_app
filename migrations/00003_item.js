'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      // user_id: {
      //   type: Sequelize.UUID,
      //   references: {
      //     model: 'Users',
      //     key: 'id'
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'SET NULL'
      // },
      // uuid: {
      //   type: Sequelize.UUID,
      //   defaultValue: Sequelize.UUIDV4
      // },
      sku: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.INTEGER
      },
      minStockLvl: {
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      title_slug: {
        type: Sequelize.STRING,
      },
      short_description: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.DECIMAL
      },
      price: {
        type: Sequelize.DECIMAL
      },
      discounted_price: {
        type: Sequelize.DECIMAL,
      },
      tag: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      batch_no: {
        type: Sequelize.STRING,
      },
      // expirationDate: { type: Sequelize.DATEONLY },
      // barcode: { type: Sequelize.STRING },
      // imgSrc: {
      //   type: Sequelize.STRING
      // },
      // brand: {
      //   allowNull: false,
      //   type: Sequelize.STRING
      // },
      // reviews: {
      //   type: Sequelize.STRING,
      // },
      // numReviews: {
      //   type: Sequelize.INTEGER,
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') 
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};