'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserFinancial = sequelize.define('UserFinancial', {
    user_id: DataTypes.INTEGER,
    estimated_income: DataTypes.INTEGER,
    RRSP_contribution_room: DataTypes.INTEGER,
    TFSA_contribution_room: DataTypes.INTEGER
  }, {});
  UserFinancial.associate = function(models) {
    // associations can be defined here
  };
  return UserFinancial;
};