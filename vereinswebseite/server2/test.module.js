module.exports = class Tests {
  constructor(connection) {
    this.conn = connection;
  }

  createTest(test) {
    var sql = "INSERT INTO test (firstname, lastname) VALUES (?,?)";
    return new Promise((resolve, reject) => {
      this.conn.query(
        sql,
        [test.firstname, test.lastname],
        (err, rows, fields) => {
          if (!err) resolve(rows);
          else reject(err);
        }
      );
    });
  }

  getTest() {
    var sql = "SELECT * FROM test";
    return new Promise((resolve, reject) => {
      this.conn.query(sql, (err, rows, fields) => {
        if (!err) resolve(rows);
        else reject(err);
      });
    });
  }
};
