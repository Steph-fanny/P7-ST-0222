'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    
    static associate(models) {
      
      Comment.belongsTo(models.User, { foreignKey: 'userId'})
      Comments.belongsTo(models.Post, { foreignKey: 'postId' })  
    } 
  }           
  
  Comment.init({
    author: { type : DataTypes.STRING },
    authorId: { type : DataTypes.INTEGER },
    postId: { type : DataTypes.INTEGER },  
    content: { type: DataTypes.TEXT, allowNull: false },
  }, 
  {
    sequelize,
    modelName: 'Comment',
  })
 

  return Comment;
};