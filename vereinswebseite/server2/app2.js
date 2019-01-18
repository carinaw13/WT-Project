const express = require("express");
const bp = require("body-parser");
const app = express();
const conn = require("./connection");
const port = 5000;
const MembersModule = require("./members.module");

conn.connect();

app.use(bp.json());

//------------------------------------------------------------------------------------------------
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

app.delete("/tests/:id", (req, res) => {
  let result = new TestsModule(conn).deleteTest(req);
  res.send(result);
});
//------------------------------------------------------------------------------------------------

// start the webserver
app.listen(port, () => console.log("app2.js listening on port " + port));
