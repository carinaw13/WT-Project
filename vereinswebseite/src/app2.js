const express = require("express"); // load the node express module
const bp = require("body-parser");
const mysql = require("mysql2/promise");
const app = express(); // create a new express app

let db; // will be set below!
let conn;

mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "Gabel35!",
    database: "vereinswebseite_db"
  })
  .then(connection => {
    conn = connection;
    db = connection; // remember the db-handle!
    return db.query("SELECT * FROM members");
  });

app.get("/", (req, res, next) => {
  conn.query("SELECT * FROM members").then(data => res.send(data));
  return;
});

app.get("/members", (req, res, next) => {
  res.send("hello world");
});

// let's treat incoming request bodies as text/plain
app.use(bp.text());

// this will catch any incoming request...
app.use((req, res) => {
  console.log([req.method, req.hostname, req.ip, req.url, req.headers]);
  console.log(req.query);
  console.log(req.body);
  res.status(200).end(); // sends 200 OK, no body, closes connection
});

// start the webserver, listen on port 3000
app.listen(3000, () => console.log("Server ready on port 3000!"));
