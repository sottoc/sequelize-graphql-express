'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Mortgages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rate_type: {
        type: Sequelize.INTEGER
      },
      term: {
        type: Sequelize.INTEGER
      },
      interest_rate: {
        type: Sequelize.FLOAT
      },
      rate_hold_data: {
        type: Sequelize.STRING
      },
      monthly_prepayment: {
        type: Sequelize.FLOAT
      },
      lump_sum_prepayment: {
        type: Sequelize.FLOAT
      },
      pre_approval: {
        type: Sequelize.BOOLEAN
      },
      prime_adjustment: {
        type: Sequelize.FLOAT
      },
      mortgage_provider: {
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
    return queryInterface.dropTable('Mortgages');
  }
};