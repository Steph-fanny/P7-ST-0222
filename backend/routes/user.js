/*importer : 
1.express (pour le router) 
2.appeler le router avec la méthode express 
3. lien du controller */
const express = require("express");
const router = require('express').Router();
const userCtrl = require ('../controllers/user.ctr');


/******** création des routes d'auth */

/*création et enregistrement d'un nouvel utilisateur*/
router.post('/signup', userCtrl.signup);
/*connexion d'un utilisateur*/
router.post('/login', userCtrl.login);

module.exports = router;
