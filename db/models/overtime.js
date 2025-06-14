'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Overtime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Overtime.init({
    userId: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    hours: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    isPaid: DataTypes.BOOLEAN,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Overtime',
  });
  return Overtime;
};