const express = require("express"); // load the node express module
const bp = require("body-parser");
const app = express(); // create a new express app
const conn = require("./connection");
const port = 5000;
const UsersModule = require("./users.module");
const TestsModule = require("./test.module");

let db;

conn.connect();

app.use(bp.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/users", (req, res) => {
  conn.query("SELECT * FROM user", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

//Delete one specific user
app.delete("/users/:id", (req, res) => {
  conn.query(
    "DELETE FROM user WHERE userId = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send();
      else console.log(err);
    }
  );
});

app.post("/users", async (req, res) => {
  let user = req.body;
  let result = await new UsersModule(conn).createUser(user);
  res.send(result);
});
//-------------------------------------------------------------------------------------------------------
/*
app.get("/tests", (req, res) => {
  let result = await new TestsModule(conn).getTest();
  res.send(result);
});*/
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

// start the webserver, listen on port 3000
app.listen(port, () => console.log("Example app.js listening on port " + port));
