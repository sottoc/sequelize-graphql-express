'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email_address: DataTypes.STRING,
    birthday: DataTypes.STRING,
    cell_number: DataTypes.STRING,
    marital_status: DataTypes.INTEGER,
    dependents: DataTypes.STRING,
    address: DataTypes.STRING,
    financial_characteristics: DataTypes.STRING,
    financial_profile_id: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};