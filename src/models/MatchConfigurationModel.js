'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MatchConfigurationModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MatchConfigurationModel.belongsTo(models.matches, {
        foreignKey: 'idPartida'
      })
    }
  };
  MatchConfigurationModel.init({
    numeroTiros: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'match_configurations',
  });
  return MatchConfigurationModel;
};