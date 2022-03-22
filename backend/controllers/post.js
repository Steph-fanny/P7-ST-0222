/*importer les modeles et package */
// package fs : telechargement et suppression d'images//
const fs = require ('fs');
const db = require("../models/index");
const User = db.User;
const Post= db.Post;
const Comment = require ('../models/comment');



// // Création d'un message //
// exports.addPost = (req, res, next) => {
//     const post = {
//        userId: req.body.userId,  
//         firstName: req.body.firstName,        
//         content: req.body.content,
//         imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
//         }
     
    
//     // const post =await Post.create({

//     // })
//     Post.create(post)
//         .then(() => res.status(201).json({ message: "Message envoyé!" }))
//         .catch(error => res.status(400).json({ error }));
// }  

module.exports = {

  //*** créer un nouveau post (et sauvegarder) ***/
  async createPost(req, res, next) {
    console.log("creation de post")
    if (!req.body.content) {
        res.status(400).send({
            message: " message ne peut pas être vide !" });
    return
    }
      const post ={
        userId: req.body.userId, 
        firstName:req.body.firstName,             
        content: req.body.content,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
      };
      try{      
      await Post.create(post)        
        res.status(200).json({
            "message": "Post Created"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }  
},
                           

/*** afficher tous les posts */
async getAllPost(req, res, next){
  console.log("bonjour tous les posts")
  try{
    const posts = await Post.findAll()   
        res.status(200).json(posts);           
    } catch (error) {
        res.status(400).send(error)
      }  
    },
    

    
    




//*****Afficher un post  : get
async getOnePost(req, res, next) {
  try{
    const post = await Post.findAll({
      where: { id: req.params.id, userId: req.user.id },
     include: [{ model: db.User }]
    })  
    res.status(200).json(post[0]);
    }catch (error){
        res.status(400).json({message: error.message});
        }
      },

  

// *** supprimer un post  et les commentaires qui sont liés***/
async deletePost (req, res, next) {
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






async modifyPost (req, res, next) {
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

