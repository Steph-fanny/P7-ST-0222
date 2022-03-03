// /* configuration de sequelize pour la BDD*/
// "use strict";
// require("dotenv").config();

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');

// const dbConfig = require("../config/db.config.js");
// const sequelize = new Sequelize(
//   dbConfig.DB, 
//   dbConfig.USER, 
//   dbConfig.PASSWORD, 
//   {
//   host: dbConfig.HOST,
//   dialect: "mysql",
//   });
 

// const db = {};
// db.Sequelize = Sequelize,
// db.sequelize = sequelize,

// db.User = require ("../models/user.models")(sequelize, Sequelize),
// db.Post = require ("../models/post.models")(sequelize, Sequelize),
// db.Comment = require ("../models/comment.models")(sequelize, Sequelize),


// db.Post.belongsTo(db.user, {
//   through: "user_roles",
//   foreignKey: "roleId",
//   otherKey: "userId"
// }),
// //le modele utilisateur peut appartenir à plusieurs role et inversement
// db.user.belongsToMany(db.role, {
//   through: "user_roles",
//   foreignKey: "userId",
//   otherKey: "roleId"
// }),
// db.ROLES = ["user", "admin", "moderator"],


// module.exports = db,













// module.exports = db;


// const sequelize = new Sequelize(
//   process.env.NAME, 
//   process.env.USERNAME, 
//   process.env.PASSWORD, {
//   host: process.env.HOST,
//   dialect: "mysql"
//   });