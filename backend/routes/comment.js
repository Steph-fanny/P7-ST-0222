/*importer : 
1.express (pour le router) 
2.appeler le router avec la méthode express 
3.middleware pour autorisation jwt 
4.controller pour crud comment*/


module.exports = app => {

  const router = express.Router();
  const express = require("express");
  const auth = require('../middleware/auth.Jwt'); 
  const commentCtrl = require("../controllers/comment.ctr");

  /*** créer un nouveau commentaire ***/
  router.post = ("/:id", auth, commentCtrl.addComment);

  /*** afficher tous les commentaire ***/
  router.get = ("/", auth, commentCtrl.getAllComment);

   // *** supprimer un commentaire posté ***
  router.delete = ("/delete/:id", auth, commentCtrl.deleteComment);


  app.use("/api/comment", router);
}