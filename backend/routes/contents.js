
module.exports = app => {
    const contents = require("../controllers/contents.js");
    const basicAuth =require('../middleware/auth');
    var router = require("express").Router();
    const multer = require('../middleware/multer');
    const express = require('express');

  
    
    // Create a new Content

    router.post("/", multer, basicAuth, contents.create);
    router.get("/", contents.get);
    router.get("/:id", contents.getById);
    router.delete("/:id",multer,basicAuth,  contents.delete);
    router.put("/:id", multer,basicAuth, contents.update);
    app.use('/api/contents', router);
  };