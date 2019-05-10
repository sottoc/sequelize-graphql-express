'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mortgage = sequelize.define('Mortgage', {
    rate_type: DataTypes.INTEGER,
    term: DataTypes.INTEGER,
    interest_rate: DataTypes.FLOAT,
    rate_hold_data: DataTypes.STRING,
    monthly_prepayment: DataTypes.FLOAT,
    lump_sum_prepayment: DataTypes.FLOAT,
    pre_approval: DataTypes.BOOLEAN,
    prime_adjustment: DataTypes.FLOAT,
    mortgage_provider: DataTypes.STRING
  }, {});
  Mortgage.associate = function(models) {
    // associations can be defined here
  };
  return Mortgage;
};