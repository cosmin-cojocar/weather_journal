const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/

// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Spin up the server
const port = 3000;
app.listen(port, () => {
    console.log(`Weather Journal app listening on port: ${port}`);
});

// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route

