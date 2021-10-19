'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pelicula.init({
    Nombre: DataTypes.STRING,
    Descripcion: DataTypes.STRING,
    Genero: DataTypes.STRING,
    Autor: DataTypes.STRING,
    Year: DataTypes.INTEGER
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Pelicula',
  });
  return Pelicula;
};