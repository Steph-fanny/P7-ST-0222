/* exporter les paramétres de configuration pour la connexion SQL et Sequelize*/

module.exports = {
  /*connexion à la BDD SQL */
  HOST: "localhost" ,
  USER: "root" ,
  PASSWORD: "123456",
  DB: "testdb",
  dialect: "mysql",
  /* pool facultatif*/
  pool: {
    max: 5 /*nb max de connexion dans le pool*/,
    min: 0,
    /* temps max en ms que le pool essaiera d'obtenir une connexion avant de lancer 1 erreur*/
    acquire: 30000,
    /*temps max en ms pendant lequel une connexion peut etre inactive avant d'être libérée*/
    idle: 10000,
  },
};