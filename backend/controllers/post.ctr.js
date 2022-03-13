/*importer les modeles et package */
// package fs : telechargement et suppression d'images//
const fs = require ('fs');
//modles
const { Post } = require('../models/post');


// /*** créer un nouveau post (et sauvegarder) ***/
exports.createPost = (req, res, next) => {
    // test si post contient du contenu
    if(!req.body.content){
        res.status(400).send({ message: "le commentaire ne peux pas être vide"
        });
        return;
    }
    //créer un post
    const post = {
       userId: req.body.userId,
       imageUrl : `${req.protocol}://${req.get('host')}/upload/${req.file.filename}`,
       content : req.body.content,      
    };  
    
     Post.create(post)({
        userId,
        imageUrl,
        content,     
    })
     .then(()=> res.status(201).json({ message : 'post crée '}))
     .catch((error)=> res.status(400).json({error, message : 'le post ne peux pas être publié'}))
};


/*** afficher tous les posts ***/
exports.getAllPost = (req, res, next) => {
Post.findAll({
    include: ["user", "comment"]
        })       
        .then(posts => res.status(200).json({posts}))       
        .catch(error => res.status(400).json({ error}))
};

/*** afficher un post ***/
exports.getOnePost = (req, resp, next) => {
    Post.findOne ({ where: { id: req.params.id }})  // post de la BDD    
    .then(post => res.status(200).json({ post }))
    .catch(error => res.status(404).json({ error, message: 'impossible afficher le post'}))
};


/*** supprimer un post ***/
exports.deletePost  = (req, res, next) => {
    Post.findOne({ where: { id: req.params.id }})     
   .then((post) => {
            Post.destroy({ where: { id: req.params.id } }) 
                .then(() => res.status(200).json({ message: 'Post supprimé' }))
                .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};



// // *** modifier un post ***
// exports.updatePost = (req, res, next) => {
//     Post.findOne({
//     })

//     Post.update({        
//     })

// };







// /**liker un post */
// exports.likePost  = (req, res, next) => {
//     Post.findOne({        
//     })
   

// };









