'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email_address: DataTypes.STRING,
    birthday: DataTypes.STRING,
    cell_number: DataTypes.STRING,
    marital_status: DataTypes.STRING,
    dependents: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.FinancialCharacteristics, {
      foreignKey: 'UserId',
      as: 'financialCharacteristics',
    });
    User.hasOne(models.FinancialProfile, {
      foreignKey: 'UserId',
      as: 'financialProfile',
    });
  };
  return User;
};