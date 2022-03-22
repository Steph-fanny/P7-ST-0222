/* middlware qui protégera les routes selectionnées et vérifier que
l'utilisateur est authentifier avant d'autoriser l'envoi des requetes*/
/* => vérifier si token valable  et si userId correspond bien*/

const jwt = require('jsonwebtoken'); // On a besoin du package jwt //

module.exports = (req, res, next) => { // On exporte un middleware //
    try {
        console.log(req.headers)
        const token = req.headers.authorization.split(' ')[1]; // Récupération du token dans le header dans un tableau split et on retourne le 2ème élément //
            console.log(token)
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET'); // On décode le token, la clé doit correspondre à celle de la fontion login //
            console.log(decodedToken)
        const userId = decodedToken.userId; // On récupére l'userId //
            console.log(userId)
        req.decodedToken = decodedToken
        if (req.body.userId && req.body.userId !== userId) { // Si l'userId du corps de la requête est différent de userId //
            throw 'User ID non valable'; // Throw pour renvoyer l'erreur //
        } else {
            // res.locals.idUser = userId
            next();// Tout est ok donc, on passe au prochain middleware //
        }
    } catch(error) {
        res.status(401).json({ error });
    }
};


// module.exports = (req, res, next) => {
//   try {
//       console.log(req.headers.authorization)
//     const token = req.headers.authorization.split(' ')[1] //récupération du token depuis le header Authorization
//     const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
//     const userId = decodedToken.userId;
//       if(req.body.userId && req.body.userId != userId){
//         throw 'Mauvais ID utilisateur !'
//       }
//       else{ 
//         //verifier que c'est bien l'utilisateur "local"
//         res.locals.idUser = userId
//         next();
//       }   

//     // si erreur si une des const =>renvoie catch
//   } 
//     catch(error) {
//         console.log(error);
//                     res.status(404).json ({error})
//     }
// };