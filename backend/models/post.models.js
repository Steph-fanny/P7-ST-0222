'use strict';
const {
    Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
      /**
      * Helper method for defining associations.
      * This method is not a part of Sequelize lifecycle.
      * The `models/index` file will call this method automatically.
      */
      static associate(models) {
        // definition de l'association
        models.Post.belongsTo(models.User,{
          foreignKey: {
            allowNull: false
          }, onDelete:'CASCADE', 
        }),
          models.Post.hasMany(models.Comment )
          models.Post.hasMany(models.Like)  
      }
    };        
     
    Post.init({
    message : { type: DataTypes.TEXT, allowNull: false},
    photo : {type: DataTypes.STRING,allowNull: true},
    link : { type: DataTypes.STRING, allowNull: true },
       
    }, {
        sequelize,
        modelName: 'Post',        
    });

    return Post;
};

  
   
   