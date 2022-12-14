'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      debitedAccountId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'accounts',
          key: 'id'
        },
      },
      creditedAccountId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'accounts',
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};
