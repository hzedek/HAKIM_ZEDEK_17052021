const db = require("../models");
const Content = db.Contents;
const Op = db.Sequelize.Op;
const fs = require('fs');
const multer = require('multer')

exports.create = (req, res) => {
  // Create a content

  if (req.file) {
  const contents = {
    title: req.body.title,
    text: req.body.text,
    multimedia: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    Users_id: req.body.Users_id,
  } // Save user in the database
  Content.create(contents)
    .then(data => {
      res.send(data);console.log("req.file",req.file);
    })
    .catch(err => {
      console.log(err, "Erreur<<<<<<<<<<<<<");
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the content."
      });
    })}

  if (req.body.gif) {
    const contents = {
      title: req.body.title,
      text: req.body.text,
      Users_id: req.body.Users_id,
      gif: req.body.gif
    } // Save user in the database
    Content.create(contents)
      .then(data => {
        res.send(data);console.log(req.body.gif,"req.body.gif");
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the content."
        });
      })
  }

  if (!req.file && !req.body.gif) {
    const contents = {
      title: req.body.title,
      text: req.body.text,
      Users_id: req.body.Users_id,
    }
    // Save user in the database
    Content.create(contents)
      .then(data => {
        res.send(data);console.log(data,"!req.file || !req.body.gif");
      })
      .catch(err => {
        console.log(err, "Erreur<<<<<<<<<<<<<");
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the content."
        });
      })
  }
}

// Find a user with his email
exports.get = (req, res) => {
  Content.findAll({ order: [["createdAt", "DESC"]] })
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
//Update a Content identified by the id in the request:
exports.update = (req, res) => {
  const id = req.params.id;

  Content.update(req.body, {
    where: { id: id }
  })
    .then(
      res.send({
        message: "Content was updated successfully."
      })
    )
    .catch(err => {
      res.status(500).send({
        message: "Error updating Content with id=" + id
      });
    });
};


// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  Content.findOne({ where: { id: req.params.id } })
    .then(res => { 
      if (res.multimedia) {
        const filename = res.multimedia.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Content.destroy({ where: { id: req.params.id } })
          .then((res) => console.log(res))
          .catch(error => console.log(error))
      })}
      Content.destroy({ where: { id: req.params.id } })
      .then((res) => console.log(res))
      .catch(error => console.log(error))
    })
    .then(res => console.log(res))
    .catch(error => console.log(error))
  
  }