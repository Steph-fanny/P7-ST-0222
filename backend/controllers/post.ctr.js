/*importer les modeles */
const db = require("../models");
const Post = db.Post;


/*** créer un nouveau post (et sauvegarder) ***/
exports.createPost = (req, res, next) => {
    // test
    if(!req.body.content){
        res.status(400).send({ message: "le commentaire est vide, il ne sera pas publié!"
        });
        return
    }
    //créer un post  
    
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






