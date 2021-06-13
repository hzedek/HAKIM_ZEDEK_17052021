
module.exports = app => {
    const contents = require("../controllers/contents.js");
    const basicAuth =require('../middleware/auth');
    var router = require("express").Router();
    const multer = require('../middleware/multer');

  
    
    // Create a new Content

    router.post("/", multer, contents.create);
    router.get("/",  contents.get)
    router.delete("/", contents.delete)
    router.put("/", contents.update)

    app.use('/api/contents', router);
  };