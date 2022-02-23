/*importer les modeles */
const db = require("../models/post.models");
const Post = db.post;


/*** créer un nouveau post (et sauvegarder) ***/
exports.createPost = (req, res, next) => {
    // test
    if(!req.body.content){
        res.status(400).send({ message: "le commentaire ne peux pas être vide"
        });
        return;
    }
    //créer un post
    const post = {
       content : req.body.content,
       imageUrl : `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
       /*id de l'user*/
    }  
    
     Post.create(post)
     .then(()=> res.status(201).json({ message : 'post crée '}))
     .catch((error)=> res.status(400).json({error, message : 'le post ne peux pas être publié'}))
};


/*** afficher tous les posts ***/
exports.getAllPost = (req, res, next) => {
Post.findAll
};


/*** afficher un post ***/
exports.getOnePost = (req, resp, next) => {
    Post.findOne ({

    })
}

// *** modifier un post ***
exports.updatePost = (req, res, next) => {
    Post.findOne({
    })

    Post.update({        
    })

};

/*** supprimer un post ***/
exports.deletePost  = (req, res, next) => {
    Post.findOne({        
    })
    Post.detroy({})

};


/*** admin supprime un post */






