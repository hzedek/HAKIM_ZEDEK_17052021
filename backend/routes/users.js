module.exports = app => {
    const users = require("../controllers/users.js");
    const basicAuth =require('../middleware/auth');
    var router = require("express").Router();
  
    // Create a new user
    router.post("/signup", users.signup);
    router.post("/login", users.login);
    router.get('/:id',basicAuth, users.get)
    router.delete('/:id', users.delete)
 
  
    app.use('/api/users', router);
  };