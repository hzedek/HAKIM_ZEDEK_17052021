module.exports = app => {
    const users = require("../controllers/users.js");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/signup", users.signup);
    router.post("/login", users.login);
    router.get('/', users.get)
 
  
    app.use('/api/users', router);
  };