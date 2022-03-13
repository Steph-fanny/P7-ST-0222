/*importer les modeles */
const db = require("../models/comment");
const { Comment } = require('../models/comment');

/**** creation d'un commentaire */
exports.createComment = (req, res, next) => {
    if (!req.body.content) {
            res.status(400).send({message: "impossible de publier un commentaire vide !"
            });
    }
    const comment = {
        userId: req.body.userId,
        postId: req.body.postId,       
        content: req.body.content
    };
    Comment.create(comment)
        .then(() => res.status(201).json({ message: "Réponse envoyée !" }))
        .catch(error => res.status(400).json({ error }));
};


// /*** afficher tous les commentaires ***/
exports.getAllComment = (req, res, next) => {
    Comment.findAll({ where: { messageId: req.params.id }})
        .then((comments) => res.status(200).json(comments))
        .catch(error => res.status(400).json({ error }));
};

// /*** afficher un commentaire ***/
exports.getOneComment = (req, res, next) => {
    Comment.findOne({ where: { id: req.params.id } })
        .then((comment) => res.status(200).json({message: "commentaire affiché"}))
        .catch(error => res.status(404).json({ error }));
};



// // ***supprimer un post
exports.deleteComment  = (req, res, next) => {
    Comment.findOne({where: {Id: req.params.id }})      
   .then((comment) => {
            Comment.destroy({ where: { id: req.params.id } }) 
                .then(() => res.status(200).json({ message: 'commentaire supprimée' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

// // *** modifier un commentaire ***
// exports.updateComment = (req, res, next) => {
//     Comment.findOne({
//     })

//     Comment.update({        
//     })

// };