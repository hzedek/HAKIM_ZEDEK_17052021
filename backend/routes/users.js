module.exports = app => {
    const users = require("../controllers/users.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", users.signup);
    router.get("/", users.login)  
  
    app.use('/api/users', router);
  };