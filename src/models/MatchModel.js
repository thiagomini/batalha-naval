'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MatchModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MatchModel.belongsTo(models.users, {
        foreignKey: 'idJogador1',
        as: 'jogador1'
      });

      MatchModel.belongsTo(models.users, {
        foreignKey: 'idJogador2',
        as: 'jogador2'
      });

      MatchModel.belongsTo(models.users, {
        foreignKey: 'turnoDoJogador',
        as: 'jogadorDoTurno'
      });

      MatchModel.belongsTo(models.users, {
        foreignKey: 'vencedor',
        as: 'vencedor'
      });
    }
  };
  MatchModel.init({
  }, {
    sequelize,
    modelName: 'matches',
  });
  return MatchModel;
};