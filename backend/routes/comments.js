module.exports = app => {
    const Comments = require("../controllers/Comments.js");
    const basicAuth =require('../middleware/auth');
    var router = require("express").Router();
    const express = require('express');

    
    router.post("/", Comments.create);
    router.get("/",  Comments.get);
    router.delete("/:id",basicAuth, Comments.delete);
 

    app.use('/api/Comments', router);
  };