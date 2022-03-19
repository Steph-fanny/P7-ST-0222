/*importer les modeles */

const Comment = require('../models/comment');
const fs = require('fs');
const db = require('../models');
const User= require('../models/user');
const Post = require('../models/post');


/**** creation d'un commentaire */
exports.addComment = (req, res, next) => {
    if (!req.body.content) {
            res.status(400).send({message: "impossible de publier un commentaire vide !"
            });
    }
        User.findOne({
            attributes: ['firstName'], 
            where: { id: req.body.userId }
        })
        .then(user=>{        
            const newComment = {
                author:user.firstName,
                authorId:req.body.userId,               
                postId: req.params.id,       
                content: req.body.content
            };
        Comment.create(newComment)
            .then(() => res.status(201).json({ message: "Commentaire crée !" }))
            .catch(error => {console.log(error);
                    res.status(500).json ({error})
                })
        }) 
}  

// // /*** afficher tous les commentaires ***/
// exports.getAllComment = (req, res, next) => {
//     Comment.findAll({ where: { messageId: req.params.id }})
//         .then((comments) => res.status(200).json(comments))
//         .catch(error => {console.log(error);
//                 res.status(400).json ({error})
//             })
// };

// // /*** afficher un commentaire ***/
// exports.getOneComment = (req, res, next) => {
//     Comment.findOne({ where: { id: req.params.id } })
//         .then((comment) => res.status(200).json({message: "commentaire affiché"}))
//         .catch(error => {console.log(error);
//                 res.status(400).json ({error})
//             })
// };


// // ***supprimer un commentaire
exports.deleteComment  = (req, res, next) => {
    User.findOne({
        attributes: ['isAdmin'], 
        where: { id: req.body.userId }
    })
    .then(user=>{   
        Comment.findOne({
            where: {Id: req.params.id },
            attributes: ['authorId']         
        })              
            .then((comment) => {
                 if (req.body.userId == comment.authorId || user.isAdmin == '1' ) {
                    Comment.destroy({ where: { id: req.params.id } }) 
                        .then(() => res.status(200).json({ message: 'commentaire supprimée' }))
                        .catch(error => {console.log(error);
                            res.status(400).json ({error})
                        })
                }else {res.status(401).json({ message: 'vous n/avez pas l/autorisation '})}

            })      
    })         
    .catch(error => {console.log(error);
        res.status(500).json ({error})
    })
};


// *** modifier un commentaire : auteur du commentaire ***
exports.updateComment = (req, res, next) => {
    User.findOne({        
        where: { id: req.body.userId }
    })
    .then(user=>{   
        Comment.findOne({
            where: {Id: req.params.id },
            attributes: ['authorId']       
        })                          
        .then((comment) => {
            if (req.body.userId == comment.authorId ) {
                const newComment = { comment: req.body.comment };
                    Comment.update(
                        newComment,
                        { where: { id: req.params.id }}
                    ) 
                    .then(() => res.status(200).json({ message: 'commentaire modifié' }))
                    .catch(error => {console.log(error);
                            res.status(400).json ({error})
                })
                }else {res.status(401).json({ message: 'vous n/avez pas l/autorisation '})}
            })      
        })         
    .catch(error => {console.log(error);
        res.status(500).json ({error})
    })
};