
module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
   
    message :  {type: Sequelize.TEXT, allowNull: false},
    photo :    { type: sequelize.string, allowNull: true},
     
  });
  return Post;
}