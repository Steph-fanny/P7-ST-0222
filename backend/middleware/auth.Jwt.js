/* middlware qui protégera les routes selectionnées et vérifier que
l'utilisateur est authentifier avant d'autoriser l'envoi des requetes*/
/* => vérifier si token valable  et si userId correspond bien*/

const jwt = require('jsonwebtoken')

module.exports = (req, resp, next) => {
    try{
    /* récupèrer le userId de la requête  */
    const userId = decodedToken.userId;
    /*recupérer le token dans le header auth : split (tableau avec beared et token)*/
    const token = req.headers.authorization.split(' ')[1];
    /*decoder le token*/
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');

    if(req.body.userId && req.body.userId !== userId){
        throw 'utilisateur invalide';
    }else{
        // vérifier que c'est bien l'utilisateur "local"
        // res.locals.idUser=userId,
        next();
    }
    // si erreur sur l'une des const => renvoie catch
    } catch {error =>
        res.status(401).json ({
            error : new Error('requete invalide')
        });       
    }
};
