const express = require("express");
const path = require("path");

const app = express();

// 👇 THIS makes your public_html folder work
app.use(express.static(path.join(__dirname, "public_html")));

// 👇 Force homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public_html", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
