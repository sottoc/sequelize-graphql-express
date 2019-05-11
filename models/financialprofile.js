'use strict';
module.exports = (sequelize, DataTypes) => {
  const FinancialProfile = sequelize.define('FinancialProfile', {
    UserId: DataTypes.INTEGER,
    estimated_income: DataTypes.INTEGER,
    RRSP_contribution_room: DataTypes.INTEGER,
    TFSA_contribution_room: DataTypes.INTEGER
  }, {});
  FinancialProfile.associate = function(models) {
    // associations can be defined here
    FinancialProfile.belongsTo(models.User);
  };
  return FinancialProfile;
};