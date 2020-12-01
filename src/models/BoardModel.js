'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BoardModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BoardModel.belongsTo(models.users, {
        foreignKey: 'idJogador'
      });

      BoardModel.belongsTo(models.matches, {
        foreignKey: 'idPartida'
      })
    }
  };
  BoardModel.init({
    idUsuario: DataTypes.INTEGER,
    idPartida: DataTypes.INTEGER,
    tamanho: DataTypes.INTEGER,
    tirosRestantes: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'boards',
  });
  return BoardModel;
};