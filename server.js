//require env
require("dotenv").config();

//import packages
const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors");

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

// Start up an instance of app
const app = express();
const weatherRoutes = require("./server/routes/weatherRoutes");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use(weatherRoutes);
// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
//start the server
app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
