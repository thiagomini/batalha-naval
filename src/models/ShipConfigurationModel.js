'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShipConfigurationModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ShipConfigurationModel.belongsTo(models.match_configurations, {
        foreignKey: 'idConfiguracaoPartida'
      });

      ShipConfigurationModel.belongsTo(models.ship_types, {
        foreignKey: 'idTipoNavio'
      });
    }
  };
  ShipConfigurationModel.init({
    quantidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ship_configurations',
  });
  return ShipConfigurationModel;
};