const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Gabel35!",
    database: "vereinswebseite_db",
    multipleStatements: true
  });

  module.exports = connection;