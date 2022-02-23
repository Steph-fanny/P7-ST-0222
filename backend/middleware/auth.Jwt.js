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
    const decoderToken = jtw.verify(token, 'RANDOM_TOKEN_SECRET');

    if(req.body.userId && req.body.userId !== userId){
        throw 'utilisateur invalide';
    }else{
        next();
    }
    } catch {
        resp.status(401).json ({
            error : new Error('requete invalide')
        });
    }
};
