'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShipTypeModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ShipTypeModel.init({
    nome: DataTypes.STRING,
    tamanho: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ship_types',
  });
  return ShipTypeModel;
};