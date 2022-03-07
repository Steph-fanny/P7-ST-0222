'use strict';
const dotenv = require("dotenv");
dotenv.config({path:"./.env"});
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');



const sequelize = new Sequelize(process.env.DB_USERNAME, 
  process.env.DB_PASS,
  process.env.DB_DATABASE, {
  host: process.env.DB_HOST,
  port : process.env.DB_PORT,
  dialect: 'mysql'
});


const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require ("./user")(sequelize, Sequelize),
db.Post = require ("./post")(sequelize, Sequelize),
db.Comment = require ("./comment")(sequelize, Sequelize),


sequelize.authenticate()
  .then(() => console.log('Connexion à mysql réussie !'))
  .catch(error => console.log('Connexion échouée:' + error))

module.exports = db;