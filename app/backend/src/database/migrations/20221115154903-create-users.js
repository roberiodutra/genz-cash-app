'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      // accountId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'accounts',
      //     key: 'id'
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
