'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: { type: DataTypes.STRING, allowNull : false },
    lastName: { type: DataTypes.STRING, allowNull : false },
    email: { type: DataTypes.STRING, unique: true, allowNull : false },
    password: { type:DataTypes.STRING, allowNull : false },
    imageUrl: { type:DataTypes.STRING, allowNull: true, default : " ../images/photo_profil.jpg"},
    isAdmin: { type:DataTypes.BOOLEAN, allowNull : false },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};