const express = require("express");
const bp = require("body-parser");
const app = express();
const conn = require("./connection");
const port = 5000;
const UsersModule = require("./users.module");
const TestsModule = require("./test.module");

conn.connect();

app.use(bp.json());

//------------------------------------------------------------------------------------------------
app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/users", (req, res) => {
  conn.query("SELECT * FROM user", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

app.post("/users", async (req, res) => {
  let user = req.body;
  let result = await new UsersModule(conn).createUser(user);
  res.send(result);
});

app.delete("/users/:id", (req, res) => {
  let result = new UsersModule(conn).deleteUser(req);
  res.send(result);
});
//------------------------------------------------------------------------------------------------
app.get("/tests", (req, res) => {
  conn.query("SELECT * FROM test", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

app.post("/tests", async (req, res) => {
  let test = req.body;
  let result = await new TestsModule(conn).createTest(test);
  res.send(result);
});
//------------------------------------------------------------------------------------------------

// start the webserver
app.listen(port, () => console.log("app2.js listening on port " + port));
