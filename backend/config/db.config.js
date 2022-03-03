/* exporter les paramétres de configuration pour la connexion SQL et Sequelize*/
  const mysql = require("mysql");
  // masquer les informations sensibles : MDP et identifiants
  require('dotenv').config({path:'./config/.env'})

  const NAME = process.env.NAME;
  const PASS = process.env.PASS;
  const HOST = process.env.HOST;
  const DATABASE = process.env.DATABASE

  // connexion à la BDD MySql
  const db = mysql.createConnection ({
    host : HOST,
    user : NAME,
    password : PASS,
    database : DATABASE,
    dialect: "mysql"  
  /* pool facultatif*/
  // pool: {
  //   max: 5 /*nb max de connexion dans le pool*/,
  //   min: 0,
  //   /* temps max en ms que le pool essaiera d'obtenir une connexion avant de lancer 1 erreur*/
  //   acquire: 30000,
  //   /*temps max en ms pendant lequel une connexion peut etre inactive avant d'être libérée*/
  //   idle: 10000,
  // },
  //});
  })

  
db.connect ((err) => {
 if (err) throw err; 
})
 console.log("Connected!")

module.exports = db;















