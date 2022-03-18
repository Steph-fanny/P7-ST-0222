/*importer les modeles et package */
// package fs : telechargement et suppression d'images//
const fs = require ('fs');
const Post = require('../models/post');
const User = require ('../models/user');


// /*** créer un nouveau post (et sauvegarder) ***/
exports.createPost = (req, res, next) => {
    console.log("nouveau post")
 const post = {
        userId: req.body.userId,        
        content: req.body.content
    }; 
    Post.create(post)
        .then(() => res.status(201).json({ message: "Post publié!" }))
        .catch(error => {console.log(error);
            res.status(400).json ({message: 'post non publié'})
        })



//    if (req.file) {
//         Post.create({
//             userId: req.body.userId,
//             content: req.body.content,
//             imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
//         })
//             .then(() => res.status(201).json({message: 'post publié avec photo!'}))
//             .catch(error => {console.log(error);
//                         res.status(400).json ({message: 'post non publié'})
//             })
//         }
//     else{
//         console.log("post sans image" )
//         Post.create({
//             userId: req.body.userId,
//             content: req.body.content,
//             imageUrl: null,
//         })
//         .then(() => res.status(201).json({message: 'post publié !'}))
//         .catch(error => {console.log(error);
//             res.status(400).json ({message: 'post non publié'})
//         })
//     }

}    

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



