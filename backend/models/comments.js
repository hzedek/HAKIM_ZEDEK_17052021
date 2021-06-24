module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("Comments", {
        comments: Sequelize.STRING
    },{ timestamps: false});
  
    Comments.associate = models =>{
        Comments.belongsTo(models.Users, {
        foreignKey: "Users_id" , allowNull:false
     }),
     Comments.belongsTo(models.Contents, {
      foreignKey: "Contents_id" 
   })
    }

    return Comments;
  };