"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Post);
      models.User.hasMany(models.Comment);
      models.User.hasMany(models.Like);
    }
  }
  User.init(
    {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName:  { type: DataTypes.STRING, allowNull: false },
    email:     { type: DataTypes.STRING, unique: true, allowNull: false },
    password:  { type: DataTypes.STRING, allowNull: false },
    photo :    { type: DataTypes.string, allowNull: true, default : " ../images/photo_profil.jpg"},
    isAdmin:   { type:DataTypes.BOOLEAN, allowNull: false },
    //post qui ont deja ete like : pour ne pas que la personne like a l'infini
    likes:     { type : DataTypes.STRING},
    timestamps: true
    },

    {sequelize, 
    modelName : "User"},
  );

  return User;
  };





