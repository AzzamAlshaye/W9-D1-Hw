// server.mjs
import express from "express";
import fs from "fs";
import path from "path";

const app = express();

// Define an HTML page (you can swap in your own markup)
const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Document</title>
</head>
<body>
  <h1>hello world</h1>
  <img src="/image" alt="Sample Image">
</body>
</html>`;

// Read image into a buffer once at startup
const imgFile = fs.readFileSync(path.resolve("./Image.png"));

// ─── Serve the HTML at the root path ──────────────────────────────────────────
app.get("/", (req, res) => {
  // Send back HTML with a 200 status and correct content type
  res.status(200).type("html");
  res.send(htmlBody);
});

// ─── Serve the image at /image ────────────────────────────────────────────────
app.get("/image", (req, res) => {
  // You could instead redirect to an external URL:
  // res.redirect(303, 'https://upload.wikimedia.org/.../coffee.JPG');

  // Send the PNG image buffer with proper headers
  res.status(200).type("png");
  res.send(imgFile);
});

// ─── Start listening on port 3000 ─────────────────────────────────────────────
const PORT = 3000;
app.listen(PORT, "127.0.0.1", () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});
