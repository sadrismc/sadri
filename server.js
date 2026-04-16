const express = require("express");
const path = require("path");

const app = express();

// Serve static files from current folder
app.use(express.static(__dirname));

// Home route → index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Optional: handle 404 properly
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

// IMPORTANT: Render uses dynamic port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
