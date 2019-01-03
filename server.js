const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

const routes = require("./routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/pdconnectdb", { useNewURLParser: true })
  .then(
    (res) => {
      console.log("Connected to database 'pdconnectdb' successfully.")
    }
  ).catch(() => {
    console.log("Connction to database failed.")
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
