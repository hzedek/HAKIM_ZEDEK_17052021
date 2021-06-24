const db = require("../models");
const Comments = db.Comments;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    // Create a Comments
    const comment = {
        comments: req.body.comments,
        Users_id: req.body.Users_id,
        Contents_id: req.body.Contents_id
    }
    Comments.create(comment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err, "Erreur<<<<<<<<<<<<<");
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the content."
      });

})}

// Find all Comments
exports.get = (req, res) => {
    Comments.findAll({ order: [["createdAt", "DESC"]],include:[db.Users] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Contents."
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
    Comments.findOne({ where: { id:id } })
    .then(res => { 
        Comments.update({comments:req.body.comments},{
      where: { id: id }}
      )
    .then((res) => console.log(res),{message:" update done"})
    .catch(error => console.log(error))
  })};

  // Delete a Comments with the specified id in the request
exports.delete = (req, res) => {
    Comments.findOne({ where: { id: req.params.id } })
      .then(res => { 
        Comments.destroy({ where: { id: req.params.id } })
        .then((res) => console.log(res))
        .catch(error => console.log(error))
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
    
    }