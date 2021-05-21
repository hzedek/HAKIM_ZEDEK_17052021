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
      }
    });
  
    
    return Contents;
  };