module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    //prénom
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName:  { type: Sequelize.STRING, allowNull: false },
    email:     { type: Sequelize.STRING, unique: true, allowNull: false },
    password:  { type: Sequelize.STRING, allowNull: false },
    // roles:     { type: Sequelize.BOOLEAN, allowNull: false },
  });
  return User;
}

