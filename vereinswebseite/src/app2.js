const express = require("express"); // load the node express module
const bp = require("body-parser");
const app = express(); // create a new express app

const port = 5000;

const mysql = require("mysql2/promise");

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

app.get("/", (req, res) => {
  res.send("go to /members or /test");
});

app.get("/members", (req, res) => {
  conn.query("SELECT * FROM members").then(data => res.send(data));
  return;
});

app.get("/test", (req, res, next) => {
  res.send("Test: Hello world!");
});

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Steve", lastName: "Smith" },
    { id: 3, firstName: "Mary", lastName: "Swanson" }
  ];
  res.json(customers);
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
app.listen(port, () => console.log("Example app.js listening on port " + port));
