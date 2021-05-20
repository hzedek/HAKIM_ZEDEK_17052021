const db = require("../models");
const User=db.Users;
const Op = db.Sequelize.Op;

// create a user
exports.create = (req, res) => {
    console.log(db.Users);
   // Validate request
   if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
   // Create a Tutorial
   const users = {
    email: req.body.email,
    password: req.body.password,
  };

  // Save user in the database
  User.create(users)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });
};

// Find a user with an id
exports.findOne = (req, res) => {
  
};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  
};