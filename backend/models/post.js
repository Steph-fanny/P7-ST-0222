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
          //Sequelize defaults to using the pluralized model name//
            //Un message peut avoir plusieurs réponses//
          } 
          readableCreatedAt () {
            return moment(this.createdAt)
            .locale('fr')
            .format('LL')
          }
  }
  Post.init({
    userId: { type : DataTypes.INTEGER },    
    content:{ type: DataTypes.TEXT },
    imageUrl: { type: DataTypes.STRING },
  }, 
  {
    sequelize,    
    modelName: 'Post',
  });

  Post.afterDestroy(async post => {
    if (post.imageUrl) {
      await deleteFile(post.imageUrl)
    }
  })

  Post.afterUpdate(async post => {
    if (post.dataValues.imageUrl !== post._previousDataValues.imageUrl) {
      await deleteFile(post._previousDataValues.imageUrl)
    }
  })
  return Post
    
  };        
      
  
