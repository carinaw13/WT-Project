const express = require("express"); // load the node express module
const bp = require("body-parser");
const app = express(); // create a new express app
const conn = require("./connection");
const port = 5000;
const MembersModule = require("./members.module");

let db;

conn.connect();

app.use(bp.json());

app.get("/", (req, res) => {
  res.send("go to /members or /test");
});

app.get("/members", (req, res) => {
  conn.query("SELECT * FROM members", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

app.post("/members", async (req, res) => {
  let member = req.body;
  let result = await new MembersModule(conn).createMember(member);
  res.send(result);
});

// start the webserver, listen on port 3000
app.listen(port, () => console.log("Example app.js listening on port " + port));
