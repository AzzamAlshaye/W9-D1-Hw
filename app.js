// index.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Option A) Serve everything in /public automatically
app.use(express.static(path.join(__dirname, "public")));

// Option B) Explicit image route
// app.get('/image', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'Image.png'), err => {
//     if (err) res.sendStatus(404);
//   });
// });

app.get("/", (req, res) => {
  res.status(200).type("html").send(`<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Express App</title></head>
<body>
  <h1>Hello World</h1>
  <img src="/image.png" alt="My Image">
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
