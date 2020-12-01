'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShipPositionModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ShipPositionModel.belongsTo(models.ships, {
        foreignKey: 'idNavio'
      });
    }
  };
  ShipPositionModel.init({
    posicaoX: DataTypes.INTEGER,
    posicaoY: DataTypes.INTEGER,
    atingido: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ship_positions',
  });
  return ShipPositionModel;
};