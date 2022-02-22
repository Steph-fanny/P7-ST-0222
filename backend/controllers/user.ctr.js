const db = require("../models");
const User = db.user;
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { response } = require("express");


// Nouveau utilisateur + save 
exports.signup = (req, res, next) => {
    // appeler bscrypt, hacher le MDP : algoritme: 10tours
    bcrypt.hash(req.body.password, 10)
    .then (hash => {
        // création du nouvel user
        const user = new User({
        id : req.body.id,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email: req.body.email,
        password : hash,
        })
        user.save()
            .then(() => res.status(201).json({message: 'utilisateur créer'}))
            .catch(error => res.status(400).json ({message: 'utilisateur non crée!'}))             
    })
    .catch (error => res.status(500).json ({error}));

};



exports.login = (req, res, next) => {
    User.findOne ({
        // email
        where: {
            email : req.body.email
        }
        // utilisateur déja crée
    }).then(user => {
        if(user){
            return res.status(400).json({
                message: 'utilisateur a déja crée'
            });
            
        } //MDP : comparer le MDP avec bcrypt:
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if(!valid){
                return res.status(401).json ({
                    message : 'mot de passe incorect !'
                });
            }
            res.status(200).json({
                userId : user._id,
                token : jwt.sign(
                    {userId: user._id},
                    'RANDOM_TOKEN_SECRET',
                    {expireIn: '24h'}
                )           
            });
        })
        .catch (error => res.status(500).json({error}));        
    })
        .catch(error => res.status(500).json({error}));

    }







