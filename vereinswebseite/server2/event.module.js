module.exports = class Events {
  constructor(connection) {
    this.conn = connection;
  }

  createEvent(event) {
    var sql = "INSERT INTO event (title, start, end) VALUES (?,?,?)";
    return new Promise((resolve, reject) => {
      this.conn.query(
        sql,
        [event.title, event.start, event.end],
        (err, rows, fields) => {
          if (!err) resolve(rows);
          else reject(err);
        }
      );
    });
  }

  deleteEvent(req) {
    return new Promise((resolve, reject) => {
      this.conn.query(
        "DELETE FROM event WHERE eventId = ?",
        [req.params.id],
        (err, rows, fields) => {
          if (!err) resolve(rows);
          else reject(err);
        }
      );
    });
  }
};
