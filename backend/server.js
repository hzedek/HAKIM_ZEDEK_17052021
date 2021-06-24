const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');


const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require ("./models");
db.sequelize.sync();

app.use('/images', express.static(path.join(__dirname, 'images')));

require("./routes/contents")(app);
require("./routes/users")(app);
require("./routes/comments")(app);
// set port, listen for requests
const PORT = process.env.PORT || 4201;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
