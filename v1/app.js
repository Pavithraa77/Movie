const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));

// Login Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});

// Home Page
app.post("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

// Content Page
app.post("/content", (req, res) => {
  const name = req.body.name;
  const tickets = req.body.tickets;
  res.send(
    `Thank you, ${name}! You have successfully booked ${tickets} tickets.`
  );
});

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
