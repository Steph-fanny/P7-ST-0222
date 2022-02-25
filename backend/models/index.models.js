/* configuration de sequelize pour la BDD*/
"use strict";
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.DB, 
  dbConfig.USER, 
  dbConfig.PASSWORD, 
  {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  }
});

const db = {};
db.Sequelize = Sequelize,
db.sequelize = sequelize,


db.user = require ("../models/user.models")(sequelize, Sequelize),
db.role = require ("../models/role.models")(sequelize, Sequelize);
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
}),
//le modele utilisateur peut appartenir à plusieurs role et inversement
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
}),
db.ROLES = ["user", "admin", "moderator"],
module.exports = db,




db.comment = require("./comment.models")(sequelize, Sequelize),
db.post = require("./post.models")(sequelize, Sequelize),


module.exports = db;