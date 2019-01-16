const express = require("express"); // load the node express module
const bp = require("body-parser");
const app = express(); // create a new express app

const port = 5000;

const mysql = require("mysql");

let db;

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "vereinswebseite_db",
  multipleStatements: true
});

conn.connect();
//----------------------------------------------------------------------------------

// let's treat incoming request bodies as text/plain
app.use(bp.json());


app.get("/", (req, res) => {
  res.send("go to /members or /test");
});
/*
app.get("/members2", (req, res) => {
  conn.query("SELECT * FROM members").then(data => {
    res.send(data[0]);
  });
  return;
});
*/
app.get("/members", (req, res) => {
  conn.query("SELECT * FROM members", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

app.post("/members", (req, res) => {
  let member = req.body;
  var sql = "INSERT INTO members2 (email, firstname, lastname) VALUES (?,?,?)";
  conn.query(
    sql,
    [member.email, member.firstname, member.lastname],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

app.get("/test", (req, res, next) => {
  res.send("Test: Hello world!");
});

// Tutorial https://www.youtube.com/watch?v=4fWWn2Pe2Mk -----------------------------------------------
//Get all employees
app.get("/employees", (req, res) => {
  conn.query("SELECT * FROM employee", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

//Get one specific employee
app.get("/employees/:id", (req, res) => {
  conn.query(
    "SELECT * FROM employee WHERE EmpID = ?",
    [req.params.id],
    function(error, results, fields) {
      if (!error) res.send(results);
      else console.log(err);
    }
  );
});

//Delete one specific employee
app.delete("/employees/:id", (req, res) => {
  conn.query(
    "DELETE FROM employee WHERE EmpID = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send();
      else console.log(err);
    }
  );
});

//Insert one specific employee
app.post("/employees", (req, res) => {
  let emp = req.body;
  console.log(req)
  var sql =
    "SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?;SET @Salary = ?; \
  CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
  conn.query(
    sql,
    [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

// this will catch any incoming request...
/*app.use((req, res) => {
  console.log([req.method, req.hostname, req.ip, req.url, req.headers]);
  console.log(req.query);
  console.log(req.body);
  res.status(200).end(); // sends 200 OK, no body, closes connection
});*/

// start the webserver, listen on port 3000
app.listen(port, () => console.log("Example app.js listening on port " + port));
