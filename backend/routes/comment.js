/*importer : 
1.express (pour le router) 
2.appeler le router avec la méthode express 
3.middleware pour autorisation jwt 
4.controller pour crud comment*/

 
const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth.Jwt')
const commentCtrl = require("../controllers/comment")
    
  /*** créer un nouveau commentaire ***/
  router.post = ("/", auth, commentCtrl.createComment);

  /*** afficher un commentaire ***/
  router.get = ("/:id", auth, commentCtrl.getOneComment);

  /*** afficher tous les commentaire ***/
  router.get = ("/", auth,commentCtrl.getAllComment);

   // *** supprimer un commentaire posté ***
  router.delete = ("/:id", auth, commentCtrl.deleteComment);

 module.exports = router;

