module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    //prénom
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName:  { type: Sequelize.STRING, allowNull: false },
    email:     { type: Sequelize.STRING, unique: true, allowNull: false },
    password:  { type: Sequelize.STRING, allowNull: false },
    photo :    { type: sequelize.string, allowNull: true, default : " ../images/photo_profil.jpg"},
    isAdmin:   { type: Sequelize.BOOLEAN, allowNull: false },
    //post qui ont deja ete like : pour ne pas que la personne like a l'infini
    likes:     { type : Sequelize.STRING},
    timestamps: true

  });
  return User;
}

