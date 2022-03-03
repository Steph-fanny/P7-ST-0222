/*Configuration: 
  1 : importation : 
      - importation express : construction API rest
      - body-parser :analyser la requête et à créer : req.bodyobjet
      - cors fournit un middleware Express pour activer CORS avec diverses options

  2 : BDD
  3 : initialisation de l'app express  et autre methode : app.use 
  4 : sécurité : CORE, helmet, cookies
  5 : bodyparser
  6 : routes
  7 : exportation de l'app */


const express = require("express");
const bodyParser = require ("body-parser");
const mysql = require("mysql2");
const connexion = require('./config/db.config');
// middleware express pour activer cors
const cors = require ("cors");
const path = require(`path`); // donne accés systéme de fichier images
const helmet = require('helmet'); // sécuriser les entêtes
require('dotenv').config();

const app =  express()
 


// BDD//
const  {sequelize} = require('./models/index.models')



var corsOptions = {
  origin: "http://localhost:8081",
};


//********************************sécurité ***********/
app.use(cors(corsOptions));
// parse requests of content-type - application/json

  // 1 er middleware exécuté par le server  : appliqué à toutes les réquetes
  //application accéde à l'api en sécurité
  //configuration des en-têtes CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*" );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});



// bodyparser : transformation du corps de la requete en objet js  : toutes les routes de l'appli
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gérer la ressource image de maniere statique
app.use("/images", express.static(path.join(__dirname, "images")));

// //protection des en-têtes HTTP grâce à Helmet
app.use(helmet());

/**************************fin sécurité*********************** */


/*************************routes*******************************/

//importer les routes à l'application : user, route post et comment
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const commentRoutes = require("./routes/comment");

// route pour le frontend :chemin + nom router : lorsque reconcontre api/user=> routes 
app.use("api/user", userRoutes);
app.use("api/post", postRoutes);
app.use("api/comment", commentRoutes);

/* essai routes */
app.get("/", (req, res, next) => {
 res.json({ message: "Welcome to bezkoder application." });
});
/*********************** FIN ROUTES*************************/

// test connexion 
const dbTest = async function () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
dbTest();


//accéder à l'appli depuis les autres fichiers
module.exports = app;
