'use strict';
module.exports = (sequelize, DataTypes) => {
  const FinancialCharacteristics = sequelize.define('FinancialCharacteristics', {
    UserId: DataTypes.INTEGER,
    employer_matched_RRSP: DataTypes.BOOLEAN,
    has_will: DataTypes.BOOLEAN,
    has_budget: DataTypes.BOOLEAN,
    pension_type: DataTypes.STRING
  }, {});
  FinancialCharacteristics.associate = function(models) {
    // associations can be defined here
    FinancialCharacteristics.belongsTo(models.User);
  };
  return FinancialCharacteristics;
};