const db = require("../models");
const Content = db.Contents;
const Op = db.Sequelize.Op;
const fs = require('fs');
const multer = require('multer');


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
      res.status(200).send(data);
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
        res.status(200).send(data);
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
        res.status(200).send(data);
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

// Find all contents
exports.get = (req, res) => {
  Content.findAll({ order: [["createdAt", "DESC"]],include:[db.Users,db.Comments] })
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

// Find one content
exports.getById = (req, res) => {
  Content.findOne({ where: { id: req.params.id } })
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

//Update a Content identified by the id
exports.update = (req, res) => {
  const id = req.params.id;
  Content.findOne({ where: { id:id } })
  .then(data => { 
 if (req.file) {
    Content.update({text:req.body.text,title:req.body.title,
      multimedia:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`},{where:{id:id}})
      .then(res.status(200).json({message: 'contenu modifié !' }))
      .catch(error => console.log(error))
  }
  if(req.body.gif){
    Content.update({text:req.body.text,title:req.body.title,gif:req.body.gif},{
      where: { id: id }})
      .then(res.status(200).json({message: 'Content modifiée !' }))
      .catch(error => console.log(error))
  }
   else{
  Content.update({text:req.body.text,title:req.body.title},{
    where: { id: id }
  })
  .then(res.status(200).json({message: 'Content modifiée !' }))
  .catch(error => console.log(error))
  }
  }
    )
};


// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  Content.findOne({ where: { id: req.params.id } })
    .then(result => { 
      if (result.multimedia) {
        const filename = result.multimedia.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {})
        Content.destroy({ where: { id: req.params.id } })
          .then(() => res.status(200).json({ message: 'Content supprimée !' }))
          .catch(error => console.log(error))
      }
      else{Content.destroy({ where: { id: req.params.id } })
      .then(() => res.status(200).json({ message: 'COntent supprimée !' }))
      .catch(error => console.log(error))}
    })
    .then(res => console.log(res))
    .catch(error => console.log(error))
  
  }