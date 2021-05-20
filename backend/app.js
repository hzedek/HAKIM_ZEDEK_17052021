const express = require('express');
const app = express();
require('./config/config.json');
const path = require('path');
const helmet = require("helmet");
const bodyParser = require("body-parser");

const userRoutes=require('./routes/user');


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.json());

app.use('/api/auth', userRoutes);

app.post('/api', );
app.use('/api', );
app.put('/api', );
app.delete('/api', );

module.exports = app;