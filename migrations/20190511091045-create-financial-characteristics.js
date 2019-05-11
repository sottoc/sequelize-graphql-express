'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FinancialCharacteristics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      employer_matched_RRSP: {
        type: Sequelize.BOOLEAN
      },
      has_will: {
        type: Sequelize.BOOLEAN
      },
      has_budget: {
        type: Sequelize.BOOLEAN
      },
      pension_type: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('FinancialCharacteristics');
  }
};