/*importer : 
1.express (pour le router) 
2.appeler le router avec la méthode express 
3.middleware pour autorisation jwt 
4. middlecare pour authentification admin
5.middleware multer pour la gestion des fichiers entrants
6.controller pour crud POSTS*/


module.exports = app => {

  const router = express.Router();
  const express = require("express");
  const auth = require("../middleware/auth.Jwt");
  const authAdmin = require("../middleware/authUserAdmin");
  const multer = require("../middleware/multer.config"); 
  const postCtrl = require("../controllers/post.ctr");

  /*** créer un nouveau post (et sauvegarder) ***/
  router.post = ("/",auth, multer, postCtrl.createPost);

  /*** afficher tous les posts ***/
  router.get = ("/", auth ,postCtrl.getAllPost);

  /*** afficher un post ***/
  router.get = ("/:id", auth, postCtrl.getOnePost);

  // *** modifier un post ***
  router.put = ("/:id", auth, multer, postCtrl.updatePost);

  /*** supprimer un post  : admin ***/
  router.delete = ("/:id",authAdmin,multer, postCtrl.deletePost);

  /**aimer un post **/
  router.post = ("/:id/like", auth, postCtrl.likePost);

  app.use("/api/post", router);
}