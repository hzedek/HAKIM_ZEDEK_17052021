module.exports = (sequelize, Sequelize) => {
    const Contents = sequelize.define("Contents", {
      title: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.STRING
      },
      multimedia:{
        type: Sequelize.STRING
      },
     Users_id: {
        type: Sequelize.INTEGER 
      },
      gif:{
        type: Sequelize.STRING
      }
    });
  
    Contents.associate = models =>{
      Contents.belongsTo(models.Users, {foreignKey: "Users_id", allowNull:false }),
     Contents.hasMany(models.Comments, {foreignKey:'id' ,onDelete:'CASCADE'})
     // ,Contents.belongsTo(models.Comments, {foreignKey: "id"})
    }

    return Contents;
  };