module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("Users", {
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pseudo: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    }
  });

  
  return User;
};