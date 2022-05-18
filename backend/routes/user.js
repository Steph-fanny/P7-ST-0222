/*importer : 
1.express (pour le router) 
2.appeler le router avec la méthode express 
3.controller pour l'identification user (login et signup)
4.controller pour crud user
5. middleware verification MDP
6.middleware pour autorisation jwt 
7.middleware pour authentification admin
8. middleware multer pour la gestion des fichiers entrants*/

const express = require('express')
const router = express.Router()
const userAuth = require ('../controllers/userAuth');
const passwordValidation = require("../middleware/passwordValidation");
const auth = require ("../middleware/authJwt");
const authAdmin = require("../middleware/authUserAdmin");
const multer =require ("../middleware/multer");
const authJwt = require('../middleware/authJwt');



/******** création des routes d'auth */

/*création et enregistrement d'un nouvel utilisateur*/
//avant création verification MDP : middleware passwordValidation
router.post("/signup", authJwt, passwordValidation, userAuth.signup);
/*connexion d'un utilisateur*/
router.post("/login", userAuth.login);
/* se deconnecter*/
router.get("/logout",userAuth.logout);

/****creation du CRUD user:  
   voir tous les utilisateurs */
   router.get("/accounts", userAuth.getAllUsers),
   //*rechercher un utilisateur/ voir un profil */
   router.get("/:id", userAuth.getOneUser),
    //*modifier un utilisateur*/
   router.put("/:id", multer, userAuth.updateUserProfil);
   /*supprimer un utilisateur*/
   router.delete("/:id", userAuth.deleteUser);


module.exports = router;
