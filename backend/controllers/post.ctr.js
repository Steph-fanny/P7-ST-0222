/*importer les modeles */
const db = require("../models");
const Post = db.Post;


/*** créer un nouveau post (et sauvegarder) ***/
exports.createPost = (req, res, next) => {
Post.create
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






