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
    userId: { type : DataTypes.INTEGER },
    postId: { type : DataTypes.INTEGER },  
    content: { type: DataTypes.TEXT, allowNull: false },
  }, 
  {
    sequelize,
    modelName: 'Comment',
  })


 Comment.afterCreate(async comment => {
    const post = await comment.getPost()
    const user = await comment.getUser()

    if (user.id == post.userId) return    
  })


  return Comment;
};