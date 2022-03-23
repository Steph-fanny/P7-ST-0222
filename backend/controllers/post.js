/*importer les modeles et package */
// package fs : telechargement et suppression d'images//
const fs = require ('fs');
const db = require("../models/index");
const User = db.User;
const Post= db.Post;
const Comment = require ('../models/comment');

const CONTENT_LIMIT = 4;
//vérifier nombre de caractere <



// Création d'un message //
exports.createPost = (req, res, next) => {
  // récupérer les paramétres envoyés dans la requete
    const post = {
      userId: req.body.userId,             
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
    attributes:["userId", "content", "imageUrl",]   
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
exports.deletePost = async (req, res, next) =>{
   try{       
       
    // Post.findOne({ where: { id: req.body.id }})
    //     .then((post) => {
    //         if(post.userId === res.locals.idUser){                
    //             const filename = sauce.imageUrl.split(`/images/`)[1];
    //             // fonction de fs : unlink (suppression)
    //             fs.unlink(`images/${filename}`,() => {
    //             // suppression de la base de donnée

                  const post= await Post.destroy({ where: { id: req.params.id } })                  
                  res.status(201).json("post supprime")
                  } catch (error){
                  res.status(400).send(error);
                  }  
                },
              

    //     }),
    //   }
    // }






exports.modifyPost = async (req, res, next) =>{
  try{
    const {userId, content,imageUrl} = req.body;    

    const post = await Post.update({
    where: { id: req.params.id, userId: req.user.id },
    include: db.User
    });

    // if(!post){
    //   return res.status(400).json("post non trouvé")
    // }
      post.userId = userId;
      post.content = content;
      post.imageUrl = imageUrl;

     res.json({"message": "post updated"});
    } catch (error) {
        res.json({ message: error.message });
    }  

  }




  
                   



// /**liker un post */
// exports.likePost  = (req, res, next) => {
//     Post.findOne({        
//     })
   

// };

// exports.getOnePost = (req, res, next) => { 
//    const id = req.params.id;
//   Post.findbyPk(id)     
//       .then(data => {
//           if (data) {res.send(data);
//           } else {
//             res.status(404).send({ message: `Cannot find Tutorial with id=${id}.`
//             });
//           }
//         })
//       .catch(err => {res.status(500).send({
//           message: "Error retrieving Tutorial with id=" + id
//         });
//       });
// }

