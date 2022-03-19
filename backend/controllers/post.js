/*importer les modeles et package */
// package fs : telechargement et suppression d'images//
const fs = require ('fs');
const db = require('../models');
const Post = require('../models/post');
const User = require ('../models/user');
const Comment = require ('../models/comment');

// /*** créer un nouveau post (et sauvegarder) ***/
exports.addPost = (req, res, next) => {
    User.findOne({
        attributes: ['firstName'],
        where: { id: req.body.userId }
        })
        .then(user => {  
            const newPost = {
                userId: req.body.userId,  
                firstName: user.firstName,   
                content: req.body.content,
                imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
            }; 
    Post.create(newPost)
        .then(() => res.status(201).json({ message: "Post crée!" }))
        .catch(error => {console.log(error);
            res.status(500).json ({error})
        })
    }) 
};       

/*** afficher tous les posts et tous les commentaires ***/
exports.getAllPost = (req, res, next) => {
    Post.findAll()
       .then((allPosts) => {
            Comment.findAll()
                .then((allComments) => 
                    {res.status(200).json({
                        result: {
                            allPosts: allPosts,
                            allComments: allComments
                        }
                    })
                })
            
        })                   
        .catch(error => {console.log(error);
            res.status(500).json ({error})
        })
};

/*** afficher un post ***/
exports.getOnePost = (req, resp, next) => {
    Post.findOne ({ where: { id: req.params.id },
    include: [
      { model: User } ]
    })
    .then(post => res.status(200).json({ post }))
    .catch(error => 
        {console.log(error);
          res.status(400).json ({message: 'impossible afficher le post'})
        })          
}


/*** supprimer un post  et les commentaires qui sont liés***/
exports.deletePost  = (req, res, next) => {
    User.findOne({
        attributes: ['isAdmin', 'firsName'],
        where: { id: req.body.userId }
    })
        .then(user =>{
            Post.findOne({ where: { id: req.params.id },   
                attributes: ['userId', 'imageUrl']
            })
            .then((post) => {
             // voir si admin pour supprimer
            if (req.body.userId == post.userId || user.isAdmin == '1') {
            const filename = post.imageUrl.split('/images/')[1];   
            //supprimer image
                fs.unlink(`images/${filename}`, () => {
                    Post.destroy({ where: { id: req.params.id } }) 
                        // supprimer les commentaires liés
                        .then(()=>{
                            Comment.destroy({where: { postId: req.params.id }})
                                .then(() => {                      
                                res.status(200).json({ message: 'posts supprime' })
                                })
                        })
                        .catch(error => 
                            {console.log(error);
                            res.status(400).json ({error})
                        })      
                });
            } else { throw new Error('unauthorized') }
        })
        .catch(error => res.status(401).json({ error }));
    })
};



// /**liker un post */
// exports.likePost  = (req, res, next) => {
//     Post.findOne({        
//     })
   

// };



