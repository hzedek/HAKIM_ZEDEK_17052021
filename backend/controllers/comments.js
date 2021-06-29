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
      res.status(200).send(data);
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
    Comments.findAll({include:[db.Users,db.Contents]})
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Contents."
        });
      });
  };

  // Delete a Comments with the specified id in the request
exports.delete = (req, res) => {

        Comments.destroy({ where:{id: req.params.id }})
        .then(() => res.status(200).json({ message: 'Commentaire supprimée !' }))
        .catch(error => console.log(error))
      }