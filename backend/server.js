const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4201"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require ("./models");
db.sequelize.sync();

app.post('/', );
app.get('/',);
app.delete('/',);
app.put('/',);

require("./routes/contents")(app);
require("./routes/users")(app);
// set port, listen for requests
const PORT = process.env.PORT || 4201;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
