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
  // Callback to debug
  console.log(`Weather Journal app listening on port: ${port}`);
});

// Initialize all route with a callback function

// Get Route
app.get("/get-latest", (req, res) => {
  res.send(JSON.stringify(projectData));
});

// Post Route
app.post("/save", (req, res) => {
  projectData.temp = req.body.temp;
  projectData.date = req.body.date;
  projectData.content = req.body.content;
  res.end();
});
