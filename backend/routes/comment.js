module.exports = app => {
  /*importer : 
1.express (pour le router) 
2.appeler le router avec la méthode express 
3.MIDD auth */


  const router = express.router();
  const express = require("express");

  const auth = require('../middleware/auth');
 
  const commentCtrl = require("../controllers/comment.ctr");

  /*** créer un nouveau commentaire ***/
  router.post = ("/", auth, commentCtrl.createComment);

  /*** afficher tous les commentaire ***/
  router.get = ("/", auth, commentCtrl.findAllComment);
  /*** afficher un post ***/
  router.get = ("/:id", auth, commentCtrl.findOneComment);

  // *** modifier un post ***
  router.put = ("/:id", auth, commentCtrl.findOneComment);

  /*** supprimer un post ***/
  router.delete = ("/:id", auth, commentCtrl.deleteComment);

  app.use("/api/comment", router);
}