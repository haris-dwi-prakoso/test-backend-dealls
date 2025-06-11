'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reimbursement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reimbursement.init({
    userId: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    amount: DataTypes.INTEGER,
    description: DataTypes.STRING,
    isPaid: DataTypes.BOOLEAN,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reimbursement',
  });
  return Reimbursement;
};