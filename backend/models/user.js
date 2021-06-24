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

  User.associate = models =>{
    User.hasMany(models.Contents, {foreignKey:'id' ,onDelete:'CASCADE'}),
    User.hasMany(models.Comments, {foreignKey:'id' ,onDelete:'CASCADE'})
  }

  
  return User;
};