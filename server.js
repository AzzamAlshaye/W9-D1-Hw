// server.mjs
import { createServer } from "node:http";
import fs from "fs";

const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>hello world</h1>
</body>
</html>`;

const imgFile = fs.readFileSync("./Image.png");
const server = createServer((req, res) => {
  // res.writeHead(303, { "Content-Type": "image/jpg" });
  //Location:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/960px-A_small_cup_of_coffee.JPG"
  res.writeHead(200, { "Content-Type": "image/png" });
  res.end(imgFile);
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});

// run with `node server.mjs`
