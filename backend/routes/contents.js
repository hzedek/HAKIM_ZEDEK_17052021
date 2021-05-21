module.exports = app => {
    const contents = require("../controllers/contents.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", contents.create);
    router.get("/", contents.get)
    router.delete("/", contents.delete)
    router.put("/", contents.update)

    app.use('/api/contents', router);
  };