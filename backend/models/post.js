'use strict';
const { Model } = require('sequelize');
const moment = require('moment')
// const { Sequelize, DataTypes, Model } = require('@sequelize/core');
// const sequelize = new Sequelize('sqlite::memory:');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate (models) {
          Post.belongsTo(models.User, { foreignKey: 'userId' })
          Post.hasMany(models.Comments)          
          } 
          
  }
  Post.init({
    userId: { type : DataTypes.INTEGER },  
    firstName: { type: DataTypes.STRING, allowNull : false },  
    content:{ type: DataTypes.TEXT },
    imageUrl: { type: DataTypes.STRING },
  }, 
  {
    sequelize,    
    modelName: 'Post',
  });

   return Post
    
  };        
      
  
