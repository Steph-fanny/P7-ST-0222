/*importation modele user*/

const db = require("../models/user");
const bcrypt = require('bcrypt'); // hacher le MDP
const jwt = require("jsonwebtoken"); // token 
// const { isEmail } = require('validator'); // bibliothéque validation

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// Nouveau utilisateur + save 
module.exports.signup =  (req, res, next) => {
    console.log("coucou");
    // valider le format de l'email avec validator
    // const isValidateEmail = { isEmail}.validate(req.body.email);
    // if (!isValidateEmail) {
    if (emailRegex.test(req.body.email)){
    // res.status(400).json({message :"Le format de l'email est incorrect !"}); 
    // }else {
    // appeler bcrypt, hacher le MDP : algoritme: 10tours
    bcrypt.hash(req.body.password, 10)
    .then (hash => {
        // création du nouvel user
        const User= db.User
        User.create({     
            id: req.body.id,   
            firstName : req.body.firstName,
            lastName : req.body.lastName,        
            email: req.body.email,
            password : hash,
            IsAdmin : 0,            
        })
      
            .then((user) => res.status(201).json({
                userId:jwt.sign({
                    userId: user.id,                    
                },
                 `${process.env.SECRET_KEY}`, {
                    expiresIn: '24h'}
                ),
                message: 'utilisateur créer'                
                }))

            .catch(error => res.status(400).json ({error ,message: 'compte non crée!'}))             
    })
    .catch (error => res.status(500).json ({error}));
    }
}


exports.login = async (req, res, next) => {
    // test si champ rempli
    try {
    // récupére les données de l'utilisateur
    const user = await db.User.findOne ({
        // récupére l'email de la requete (input)
        where: {email : req.body.email},
    })
        // on vérifie que mail est dans la BDD
        if(!user){
            return res.status(400).json({message: 'utilisateur inconnu'});       
            
        } //MDP : comparer le MDP avec bcrypt:
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if(!valid){
                return res.status(401).json ({message : 'mot de passe incorect !'});
            }
            res.status(200).json({
                userId : user._id,
                token : jwt.sign(
                    {userId: user._id},
                    'RANDOM_TOKEN_SECRET',
                    {expireIn: '24h'},
                    {message : "bonjour" + user.firstName + "!"},
                )           
            });
        })
    } catch(error) {
      return res.status(500).send({ error : "erreur serveur"});
  }  
}

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
 


    







