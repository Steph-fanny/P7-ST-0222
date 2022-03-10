/*importation package
- securité : dotenv
- auth jwt*/


require("dotenv").config();
const db = require("../models/user");
const token = require ("../middleware/auth.Jwt");
const fs = require("fs");


//****récupérer tous les utilisateurs
exports.getAllUsers = async (req, resp, next) => {
    try{    
    const users = await db.User.findAll({
        attributes : ['id', 'firstName', 'lastName', 'email', 'photo']
    })
        res.status(200).send(users);
  } catch(error) {
      return res.status(500).send({ error : "erreur serveur"});
  }
};


// *****récupérer les info d'un utilisateur : profil par ex
exports.getOneUser = async (req, resp, next) => {
    console.log(req.params)
    // on récupére les infos depuis la BDD*/
  try{
      const user = await db.User.findOne({
          attributes : ['firstName', 'lastName', 'email', 'photo', ],
          where : { id : req.params.id},
      });
      res.status(200).send(user);
  } catch(error) {
      return res.status(500).send({ error : "erreur serveur"});
  }
}
 

// *******modifier  les infos d'un utilisateur : profil par ex
exports.updateUser = async (req, resp, next) => {
    console.log(req.params) 
          
    // recupere id de l'url   
   try {
     //on récupére le user que l'on veut modifier
     const userToFind = await db.User.findOne({
       where: { id: req.params.id },
     });
     if (!userToFind) {
       return res.status(401).json({ message: "utilisateur introuvable" });
     }
     // photo  à modifier
     // tableau de 2 élements  : on récupére  nom de fichier de la BDD tout ce qu'il y a apres /images/
     const filename = user.photo.split(`/upload/`)[1];
     // fs : unlink (suppression) ancienne image si modif
     fs.unlink(`upload/${filename}`, () => {
       const userObject = req.file //soit on change l'image nouvelle, soit modification corps de la requête
         ? {
             ...JSON.parse(req.body.user),
             photo: `${req.protocol}://${req.get("host")}/photo/${
               req.file.filename
             }`,
           }
         : { ...req.body };
     });

      db.User.updateOne(
       {
         ...userObject,
       },
       { where: { id: req.params.id } }
     );
     return res
       .status(200)
       .json({ message: "Votre profil a bien été modifié" });
   } catch (error) {
     return res.status(500).send({ error: "erreur serveur" });
   }
};
    
 //****supprimer un compte */     
/*** suppression du profile ***/
exports.deleteUser = async (req, res, next) => {    
        const user = await db.User.findOne({
            where: {id: req.params.id}
        });
        // s'il y a une photo => supprime de la bdd
        if (user.photo!==null) {
            const filename = user.photo.split("/upload")[1];
            fs.unlink(`upload/${filename}`, () => {
            // on supprime le compte utilisateur  : fonction destroy
            db.User.destroy({
                where: {id: req.params.id} })
            .then (()=> res.status(200).json({ message: "Profil supprimé"})
            )
            .catch(error => res.status(409).json({error}))                       
            })
               
    }
}
 





   
    





    
  
 
   

