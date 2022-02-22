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
const cors = require ("cors");
const app = express();

// const db = require("./models/index");
// db.sequelize.sync();

const path = require(`path`); // donne accés systéme de fichier images

var corsOptions = {
  origin: "http://localhost:8081",
};

//******mise en place sécurité */
app.use(cors(corsOptions));
// parse requests of content-type - application/json

  // 1 er middleware exécuté par le server  : appliqué à toutes les réquetes
  //application accéde à l'api en sécurité
  //configuration des en-têtes CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
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

/****** methode express */
// //protection des en-têtes HTTP grâce à Helmet
// app.use(helmet());

// bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// gérer la ressource image de maniere statique
app.use("/images", express.static(path.join(__dirname, "images")));




app.get("/", (req, res) => {
 res.json({ message: "Welcome to bezkoder application." });
});
// ROUTES : debut de la route + NOM routeur : si le chemin prend ce debut de route => envoi vers router
// app.use("/api/sauces", sauceRoutes);
// app.use("/api/auth", userRoutes);


// gérer la ressource image de maniere statique
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
