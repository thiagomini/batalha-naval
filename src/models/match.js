'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  match.init({
    id_jogador1: DataTypes.INTEGER,
    id_jogador2: DataTypes.INTEGER,
    turno_do_jogador: DataTypes.INTEGER,
    vencedor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'match',
  });
  return match;
};