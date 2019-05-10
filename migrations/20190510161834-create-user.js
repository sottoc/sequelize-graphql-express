'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email_address: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.STRING
      },
      cell_number: {
        type: Sequelize.STRING
      },
      marital_status: {
        type: Sequelize.INTEGER
      },
      dependents: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      financial_characteristics: {
        type: Sequelize.STRING
      },
      financial_profile_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};