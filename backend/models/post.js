'use strict';
const { Model } = require('sequelize');
const moment = require('moment')

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate (models) {
      Post.User = Post.belongsTo(User); 
      Post.Comment = Post.hasMany(Comment);         
          
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
    
     
         
}   

  
  
