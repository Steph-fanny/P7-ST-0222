/*importer les modeles et package */
// package fs : telechargement et suppression d'images//
const fs = require ('fs');
//modles
const db = require("../models/post");
const Post = db.Post;
const User = db.User;



// /*** créer un nouveau post (et sauvegarder) ***/
// exports.createPost = (req, res, next) => {
//     // test si post contient du contenu
//     if(!req.body.content){
//         res.status(400).send({ message: "le commentaire ne peux pas être vide"
//         });
//         return;
//     }
//     //créer un post
//     const post = {
//        content : req.body.content,
//        photo : `${req.protocol}://${req.get('host')}/upload/${req.file.filename}`
//        /*id de l'user*/
//     }  
    
//      Post.create(post)({
//         content,
//         photo
        

//      })
//      .then(()=> res.status(201).json({ message : 'post crée '}))
//      .catch((error)=> res.status(400).json({error, message : 'le post ne peux pas être publié'}))
// };


// /*** afficher tous les posts ***/
// exports.getAllPost = (req, res, next) => {
// Post.findAll
// };


// /*** afficher un post ***/
// exports.getOnePost = (req, resp, next) => {
//     Post.findOne ({

//     })
// }

// // *** modifier un post ***
// exports.updatePost = (req, res, next) => {
//     Post.findOne({
//     })

//     Post.update({        
//     })

// };

// /*** supprimer un post ***/
// exports.deletePost  = (req, res, next) => {
//     Post.findOne({        
//     })
//     Post.detroy({})

// };

// /**liker un post */
// exports.likePost  = (req, res, next) => {
//     Post.findOne({        
//     })
   

// };


/*** admin supprime un post */






