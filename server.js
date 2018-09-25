const express = require("express");
const app = express();
const path = require("path");

// Defines a PORT for the server to listen for requests
const PORT = 4000;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// -----------------
require('./routes.js')(app);

// Starts our server on the predefined PORT
app.listen(PORT, function() {
  console.log(`App is now listening on PORT ${PORT}`);
});
