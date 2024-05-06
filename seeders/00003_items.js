'use strict';
const { v4: uuidv4 } = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // const roles = await queryInterface.sequelize.query(
    //   `SELECT * FROM roles WHERE name IN ('Administrator', 'User');`
    // );

    // const roleMap = roles[0].reduce((acc, role) => {
    //   acc[role.name] = role.id;
    //   return acc;
    // }, {});

    await queryInterface.bulkInsert('Items', [
      {
        id: uuidv4(),
        sku: 'sku_addidas_01',
        qty: 10,
        category: 'Addidas',
        title: 'Ultra Boost',
        title_slug: 'ultra_boost_addidas',
        short_description: 'running shoes',
        description: 'addidas running shoes',
        price: 500,
        discounted_price: 300,
        tag: 'Shoes',
        status: 'Available',
      },
      {
        id: uuidv4(),
        sku: 'sku_addidas_02',
        qty: 12,
        category: 'Nike',
        title: 'Jordan 11',
        title_slug: 'jordan_11_nike',
        short_description: 'fashion shoes',
        description: 'nike fashion shoes',
        price: 300,
        discounted_price: 100,
        tag: 'Shoes',
        status: 'Unavailable',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
