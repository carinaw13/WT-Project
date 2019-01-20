const express = require("express");
const bp = require("body-parser");
const app = express();
const conn = require("./connection");
const port = 5000;
const UserModule = require("./user.module");
const EventModule = require("./event.module");
const TestsModule = require("./test.module");

conn.connect();

app.use(bp.json());

app.get("/", (req, res) => {
  res.send("go to /members or /test");
});

// USER ------------------------------------------------------------------------------------------------
app.get("/users", (req, res) => {
  conn.query("SELECT * FROM user", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

app.post("/users", async (req, res) => {
  let user = req.body;
  let result = await new UserModule(conn).createUser(user);
  res.send(result);
});

app.delete("/users/:id", (req, res) => {
  let result = new UserModule(conn).deleteUser(req);
  res.send(result);
});

// EVENT ------------------------------------------------------------------------------------------------
app.get("/events", (req, res) => {
  conn.query("SELECT * FROM event", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

app.post("/events", async (req, res) => {
  let event = req.body;
  let result = await new EventModule(conn).createEvent(event);
  res.send(result);
});

app.delete("/events/:id", (req, res) => {
  let result = new EventModule(conn).deleteEvent(req);
  res.send(result);
});

// TEST ------------------------------------------------------------------------------------------------
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

app.delete("/tests/:id", (req, res) => {
  let result = new TestsModule(conn).deleteTest(req);
  res.send(result);
});
//------------------------------------------------------------------------------------------------

// start the webserver
app.listen(port, () => console.log("app2.js listening on port " + port));
