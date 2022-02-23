// /* exporter les paramétres de configuration pour la connexion SQL et Sequelize*/
//   const mysql = require("mysql");
// // const Connection = require("mysql2/typings/mysql/lib/Connection");

//   console.log("Get connection ...");

//   var conn = mysql.createConnection({
//   /*connexion à la BDD SQL */
//   host: "localhost",
//   user: "root",
//   password: "12345",
//   database: "mytestdb",
//   dialect: "mysql",
//   /* pool facultatif*/
//   // pool: {
//   //   max: 5 /*nb max de connexion dans le pool*/,
//   //   min: 0,
//   //   /* temps max en ms que le pool essaiera d'obtenir une connexion avant de lancer 1 erreur*/
//   //   acquire: 30000,
//   //   /*temps max en ms pendant lequel une connexion peut etre inactive avant d'être libérée*/
//   //   idle: 10000,
//   // },
//   });
//   conn.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   conn.query(sql, function(err, result){
//     if(err) throw err;
//     console.log("result : "+ result);
//   });
//   });

// module.exports = conn;
