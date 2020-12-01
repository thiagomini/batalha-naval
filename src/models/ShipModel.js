'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShipModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      ShipModel.belongsTo(models.users, {
        foreignKey: 'idUsuario'
      })

      ShipModel.belongsTo(models.matches, {
        foreignKey: 'idPartida'
      });

      ShipModel.belongsTo(models.boards, {
        foreignKey: 'idTabuleiro'
      });

      ShipModel.belongsTo(models.ship_types, {
        foreignKey: 'idTipoNavio'
      })
    }
  };
  ShipModel.init({
    vivo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ShipModel',
  });
  return ShipModel;
};