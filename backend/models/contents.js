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
      Contents.belongsTo(models.Users, {
        foreignKey: "Users_id" , allowNull:false })
    }

    return Contents;
  };