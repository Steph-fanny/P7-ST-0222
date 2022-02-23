/*importer les modeles */
const db = require("../models/comment.models");
const Comment = db.comment;

/**** creation d'un commentaire */
exports.createComment = (req, res, next) => {
Comment.create({    
})

};

/*** afficher tous les commentaires ***/
exports.getAllComment = (req, res, next) => {
Comment.findAll({    
})
};



// *** modifier un commentaire ***
exports.updateComment = (req, res, next) => {
    Comment.findOne({
    })

    Comment.update({        
    })

};

// ***supprimer un post
exports.deleteComment  = (req, res, next) => {
    Comment.findOne({        
    })
    Comment.detroy({})

};
