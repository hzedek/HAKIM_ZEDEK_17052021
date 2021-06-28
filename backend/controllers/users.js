const db = require("../models");
const User=db.Users;
const Op = db.Sequelize.Op;
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const Comments = db.Comments;
const Contents= db.Contents;

// create a user
exports.signup = (req, res) => {
    
   // Validate request
   if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
   // Create a user
   bcrypt.hash(req.body.password, 10)
    .then(hash => {
   const users = {
    email: req.body.email,
    password: hash,
    pseudo:req.body.pseudo
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
  });
};

// Find a user with his email
exports.login = (req, res) => {
  User.findOne({ where: { email:req.body.email } })
  .then(user=>{console.log(User);
    if(!user){
        return res.status(401).json({error:'Utilisateur non trouvé !'});
    }
    bcrypt.compare(req.body.password, user.password)
    .then(valid => {
        if(!valid){
            return res.status(401).json({error: 'mot de passe incorrect !'})
        }
        res.status(200).json({
            userId:user.id,
            token: jwt.sign(
                {userId:user.id},
                'RANDOM_TOKEN_SECRET',
                {expiresIn:'24h'}
            )
        });
    })
    .catch(error=> res.status(500).json({error}));
})
.catch(error=> res.status(500).json({error}));
};

exports.get= (req, res) => {
  
  User.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Contents."
    });
  });};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  Comments.destroy({where:{Users_id: req.params.id}})
  .then(() => res.status(200).json({ message: 'utilisateur supprimé !' }))
  .catch(error => console.log(error))
  Contents.destroy({where:{Users_id: req.params.id}})
  .then(() => res.status(200).json({ message: 'utilisateur supprimé !' }))
  .catch(error => console.log(error))
  User.destroy({ where:{id: req.params.id }})
  .then(() => res.status(200).json({ message: 'utilisateur supprimé !' }))
  .catch(error => console.log(error))

};