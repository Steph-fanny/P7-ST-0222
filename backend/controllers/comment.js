/*importer les modeles */
const db = require("../models/index");
const User = db.User;
const Comment = db.Comment;
const Post = db.Post;
const fs = require('fs');
const CONTENT_LIMIT = 2;


/**** creation d'un commentaire */
exports.addComment = (req, res, next) => {
    // récupérer les paramétres envoyés dans la requete
    const comment = {                    
        postId: req.body.postId,       
        content: req.body.content,
        userId: req.body.userId,   
    }
        console.log(comment)
     // vérification: si 1 des paramétre obligatoire est null   
    if (req.body.content == null){
      return res.status(400).json({message: 'le contenu ne peut pas être vide'});
    } 
    if (req.body.content.lenght<= CONTENT_LIMIT){
       return res.status(400).json({message: 'le contenu doit etre plus eleve'});
    } 

    // enregistrement dans bdd
    Comment.create({            
        postId: req.body.postId,                 
        content:req.body.content,
        userId: req.body.userId,
        createAt: 0
   })
    .then(() => res.status(201).json({ message: "Message envoyé!" }))
    .catch(error => res.status(400).json({message: 'Vous ne pouvez pas publier un post' }))
}  
           





// /*** afficher tous les commentaires ***/
exports.getAllComment = (req, res, next) => {
    Comment.findAll({ 
        where: { postId: req.body.postId },
        attributes:["id","postId", "content","userId"]  
    })
        .then((comments) => res.status(200).json(comments))
        .catch(error => {console.log(error);
                res.status(400).json ({error})
            })
};

   

// /*** afficher un commentaire ***/
exports.getOneComment = (req, res, next) => {
    Comment.findOne({ 
        where: { id: req.params.id },
        attributes:["id","postId", "content","userId"]  
     })
        .then((comment) => res.status(200).json({comment}))
        .catch(error => {console.log(error);
                res.status(400).json ({error})
            })
};
   

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