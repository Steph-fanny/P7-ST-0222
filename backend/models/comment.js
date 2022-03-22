'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    
    static associate(models) {
      Comment.belongsTo(User);  
    } 
  }           
  
  Comment.init({
   
    userId: { type : DataTypes.INTEGER },
    postId: { type : DataTypes.INTEGER },  
    content: { type: DataTypes.TEXT, allowNull: false },
  }, 
  {
    sequelize,
    modelName: 'Comment',
  })
 

  return Comment;
};