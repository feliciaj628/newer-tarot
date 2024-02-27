const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;
  // Here you can process the form data, such as sending an email, saving to a database, etc.
  console.log("Received form submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  res.send("Form submitted successfully!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
