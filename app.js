// app.js
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.static("."));

// Read image
const imgFile = fs.readFileSync("image.png");

// ─── Serve the HTML at the root path use path "/" to see
app.get("/", (req, res) => {
  // Send back HTML with a 200 status and correct content type
  res.status(200).type("html");
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>hello world</h1>
  
</body>
</html>`);
});

// ─── Serve the image at use path "/image" to see /image
app.get("/image", (req, res) => {
  //redirect instead of serving directly:
  // res.redirect(303, 'https://upload.wikimedia.org/.../coffee.JPG');

  // Send the PNG image buffer with proper headers
  res.status(200).type("png");
  res.send(imgFile);
});

// ─── Start listening on port 3000
const PORT = 3000;
app.listen(PORT, "127.0.0.1", () => {
  console.log(`Listening on http://127.0.0.1:${PORT}`);
});
