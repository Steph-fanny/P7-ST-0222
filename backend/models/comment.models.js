
module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
   
    firstName: { type: Sequelize.STRING, allowNull: false },
    message :  {type: Sequelize.TEXT, allowNull: false},
    photo :    { type: sequelize.string, allowNull: true},
     
  });
  return Comment;
}