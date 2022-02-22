module.exports = app => {
  /*importer : 
1.express (pour le router) 
2.appeler le router avec la méthode express 
3.MIDD ath*/
  const router = express.router();
  const express = require("express");

  const auth = require("../middleware/auth");
  const multer = require("../middleware/multer.config");
 
  const postCtrl = require("../controllers/post.ctr");

  /*** créer un nouveau post (et sauvegarder) ***/
  router.post = ("/",auth, multer, postCtrl.createPost);

  /*** afficher tous les posts ***/
  router.get = ("/", auth ,postCtrl.findAllPost);

  /*** afficher un post ***/
  router.get = ("/:id", auth, postCtrl.findOnePost);

  // *** modifier un post ***
  router.put = ("/:id", auth, multer, postCtrl.findOnePost);

  /*** supprimer un post ***/
  router.delete = ("/:id",auth, postCtrl.deletePost);

  app.use("/api/post", router);
}