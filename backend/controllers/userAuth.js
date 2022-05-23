/*importation modele user*/

const db = require("../models/index");
const Post =db.Post;
const bcrypt = require('bcrypt'); // hacher le MDP
const jwt = require("jsonwebtoken"); // token 
const fs = require("fs");
require("dotenv").config();

const newToken = user => {
  token = jwt.sign({ userId: user.id }, 'RANDOM_TOKEN_SECRET', {
    expiresIn: '24h'
  })
  return { user, token }
}

// const { isEmail } = require('validator'); // bibliothéque validation

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// Nouveau utilisateur + save 
module.exports.signup = (req, res, next) => {   
      
    if (!emailRegex.test(req.body.email)) {    
        return res.status(400).json({message: 'Email non valide' })
        }
    // trouver un utilisateur par email    
    db.User.findOne({where: { email: req.body.email }}) 
    //Vérification si un utilisateur corresponde déjà à l'email de la DB//
      .then(user => {
        if (!user) {  

         bcrypt.hash(req.body.password, 10)
          .then (hash => {
          // création du nouvel user
            
             db.User.create ({                
                firstName : req.body.firstName,
                lastName : req.body.lastName,        
                email: req.body.email,
                password : hash,
                isAdmin : 0,            
                })      
                .then((user) => res.status(201).json(newToken(user)))              
                .catch(error => {console.log(error);
                    res.status(400).json ({message: 'compte non crée!'})
                 })            
            })
        }})    
    .catch (error => res.status(500).json ({message :"utilisateur déja existant"}));
}


exports.login = (req, res, next) => {
    console.log("salut")
    // const User = db.User
    // récupére les données de l'utilisateur
    db.User.findOne ({ where: {email : req.body.email}})
    // récupére l'email de la requete (input)
    .then(user => {
        // on vérifie que mail est dans la BDD
            if(!user){
            return res.status(401).json({message: 'utilisateur inconnu'});       
            } 
        //MDP : comparer le MDP avec bcrypt:
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if(!valid){
           return res.status(401).json ({message : 'mot de passe incorect !'});
            }  
            let token = jwt.sign(
            { userId: user.id },            
            'RANDOM_TOKEN_SECRET',
            {expiresIn: '24h'}
            );   

            res.status(200).json({
                //si ok :renvoi token 
                userId : user.id,
                email : user.email,
                isAdmin : user.isAdmin,
                token             
            })           
        })
        .catch(error => {
          console.log(error)
          res.status(500).json({ error })})
    })
        .catch(error => {
          console.log(error)
          res.status(500).json({ error })})

    .catch(error => res.status(500).json({ error }));
};


exports.logout = (req, res,) => {     
console.log(req.body);
  // remove the req.user property and clear the login session
  req.logout();
  // destroy session data
  req.session = null;
  // redirect to homepage
  res.redirect('/login/auth');
  res.status(200).json({message: "utilisateur deconnecté"});
}
 

// ****récupérer tous les utilisateurs
exports.getAllUsers = (req, res, next) => {
   console.log("bonjour tous les utilisateurs")
    db.User.findAll({
      attributes: ['id', 'firstName', 'lastName', 'email', 'imageUrl', 'isAdmin']
    })
      .then(users => res.status(200).json({ users}))       
      .catch(error =>{
        console.log(error);
          res.status(400).json ({error})
      }) 
};


// *****récupérer les info d'un utilisateur : profil par ex
// Obtention d'un compte //
exports.getOneUser = (req, res, next) => { 
  db.User.findOne({ 
    where: { id: req.params.id }})  
      .then(user => res.status(200).json({ user }))
      .catch(error =>{
        console.log(error);
        res.status(400).json({message: "utilisateur non trouvé" })
      });
}; 
                 
  
 
// *******modifier  les infos d'un utilisateur : profil par ex : PUT
exports.updateUserProfil = (req, res, next) => {  

    const userObject = req.file?{          
      ...req.body.user,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`            
      } : { 
        ...req.body }

    console.log(userObject)

  db.User.findOne({ 
    where: { id: req.params.id,},  
  })  
  db.User.update({
   ...userObject
  }, {where: { id: req.params.id }
  })

  .then(() => res.status(200).json({ postObject }))
  .catch(error => res.status(400).json({ error}))
 
} 

    
                  
/*** suppression du profil ***/
exports.deleteUser = (req, res, next) => {    
  console.log("suppression compte user")
  //  const User = db.User
    db.User.findOne({ where: {id: req.params.id}})
    .then((user) => { 
      // s'il y a une photo => supprime de la bdd
        
          // const filename = user.imageUrl.split('/images/')[1];          
          // fs.unlink(`images/${filename}`, () => {

          // on supprime le compte utilisateur  : fonction destroy
            db.User.destroy({where: { id: req.params.id }})
            .then (()=> res.status(200).json({ message: "Profil supprimé"}))
            .catch(error =>{
              console.log(error);
              res.status(400).json({message: "utilisateur non trouvé" })
            });                  
          // })
        
      })
    .catch(error => {
      console.log(error)
      res.status(500).json({error})
    });   
  }

   
        

    







