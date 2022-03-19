/*importation package
- securité : dotenv
- auth jwt*/


require("dotenv").config();
const db = require("../models");
const token = require ("../middleware/auth.Jwt");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const User = db.User;
const Post =db.Post;
const Comment= db.Comment



// ****récupérer tous les utilisateurs
exports.getAllUsers = (req, resp, next) => {   
    User.findAll()
      .then((users) => res.status(200).json(users))
        console.log(users)
      .catch(error => 
        {console.log(error);
          res.status(400).json ({error})
        })       
}     

// *****récupérer les info d'un utilisateur : profil par ex
exports.getOneUser = (req, resp, next) => {
  console.log("coucou")  
    User.findOne(     
      {where : { id : req.params.id}})    
       .then(user => {
        userId= user.id
        firstName = user.userName
        lastName = user.lastName
        email = user.email
        createdAt = user.createdAt
        isAdmin = user.isAdmin
    }) 
                 
      .catch(error => 
        {console.log(error);
          res.status(400).json({message: "utilisateur non trouvé" })
        })
  }

 
// *******modifier  les infos d'un utilisateur : profil par ex
exports.updateUser = (req, resp, next) => {   
const userObject = req.file ? {
        ...req.body.user,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {
        ...req.body
    };
    
    User.findOne({where: {id: req.params.id }})
        .then((user) => {            
            user.update({
                    ...userObject
                }, {where: { id: req.params.id }})
          .then(() => res.status(200).json({message: "Profil à jour !"})) 
          .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(500).json({error}));
}
           
/*** suppression du profil ***/
exports.deleteUser = (req, res, next) => {    
   
    User.findOne({ where: {id: req.params.id}})
      .then((user) =>{ 
      // s'il y a une photo => supprime de la bdd
        if (user.imageUrl!==null) {
          const filename = user.imageUrl.split("/upload")[1];
          fs.unlink(`upload/${filename}`, () => {
          // on supprime le compte utilisateur  : fonction destroy
            User.destroy({where: { id: req.params.id }})
            .then (()=> res.status(200).json({ message: "Profil supprimé"}))
            .catch(error => res.status(409).json({error}))                       
          })
        }
      }) 
      .catch(error => res.status(500).json({error}));   
};

 





   
    





    
  
 
   

