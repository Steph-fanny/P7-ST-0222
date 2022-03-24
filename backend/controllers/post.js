/*importer les modeles et package */
// package fs : telechargement et suppression d'images//
const fs = require ('fs');
const db = require("../models/index");
const User = db.User;
const Post= db.Post;
const Comment = require ('../models/comment');

const CONTENT_LIMIT = 4;
//vérifier nombre de caractere <



// Création d'un post //
exports.createPost = (req, res, next) => {
  // récupérer les paramétres envoyés dans la requete
    const post = {
      userId: req.body.userId, 
      postId:req.params.postId,            
      content: req.body.content,
    }
    console.log(post)
    // vérification: si 1 des paramétre obligatoire est null   
    if (req.body.content == null){
      return res.status(400).json({message: 'le contenu ne peut pas être vide'});
    } 
    if (req.body.content.lenght<= CONTENT_LIMIT){
       return res.status(400).json({message: 'le contenu doit etre plus eleve'});
    } 
    // enregistrement dans bdd
    Post.create({    
      userId: req.body.userId,                    
      content:req.body.content,
      imageUrl: null,
      likeCount:0,
    })

    .then(() => res.status(201).json({ message: "Message envoyé!" }))
    .catch(error => res.status(400).json({message: 'Vous ne pouvez pas publier un post' }))
}  
                     

/*** afficher tous les posts */
exports.getAllPost = (req, res, next) => {
  console.log("bonjour tous les posts")
  Post.findAll({ 
    attributes:["id", "userId", "content", "imageUrl",]   
  })
    .then(users => res.status(200).json({ users}))       
    .catch(error =>{
      console.log(error);
      res.status(400).json ({error})
      })           
 };

//*****Afficher un post  : get
exports.getOnePost = (req, res, next) =>{
  Post.findOne({
    attributes:["userId", "content", "imageUrl",],
    where: { id: req.params.id },
  })    
  .then(post => res.status(200).json({ post }))
  .catch(error => res.status(404).json({error}))
}

  
// *** supprimer un post  et les commentaires qui sont liés***/
exports.deletePost = (req, res, next) => {
  Post.findOne({ where: { id: req.params.id }})
    .then((post) => {
      if(post.userId === res.locals.idUser){                
             const filename = post.imageUrl.split(`/images/`)[1];
                // fonction de fs : unlink (suppression)
                fs.unlink(`images/${filename}`,() => {
                // suppression de la base de donnée

        Post.destroy({ where: { id: req.params.id } })                  
            .then(() => res.status(201).json("post supprime"))
            .catch (error =>
                      res.status(400).json({error}))
      })  
    }         
  })  
   .catch(error => res.status(500).json({ error }));        
}





// exports.modifyPost = (req, res, next) =>{
//    //soit on change l'image si une nouvelle soit on modifie juste le corps de la requête
//  const postObject = req.file
//     ? {
//         ...JSON.parse(req.body.post),
//         imageUrl: `${req.protocol}://${req.get('host')}/image/${
//           req.file.filename
//         }`
//       }
//     : { ...req.body };

// //1er argument:  quelle sauce on veut modifier, 2 eme: récupère les infos du body pour les attribuer au même id
//   Post.findOne({   
//     where: { id: req.params.id, userId: req.user.id },
//     include: db.User
//   }) 
//   .then(post => {
//     if (!post) {
//       res.status(400).json({ error: "Vous n'avez pas l'autorisation de mofifier le post" })
//     } else {
//       post.update(postObject)
//         .then(post => res.status(200).json({ post }))
//     }
//   })
// }



  
                   



// /**liker un post */
// exports.likePost  = (req, res, next) => {
//     Post.findOne({        
//     })
   

// };


