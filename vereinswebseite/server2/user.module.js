module.exports = class Users {
  constructor(connection) {
    this.conn = connection;
  }

  createUser(user) {
    return new Promise((resolve, reject) => {
      this.conn.query(
        "INSERT INTO user (gender,title,firstName,lastName,street,houseNumber,postCode,city,birthDate,phoneNumber,email,username,password,accountOwner,bankName,iban,bic,cityOfRegistration,dateOfRegistration) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          user.gender,
          user.title,
          user.firstName,
          user.lastName,
          user.street,
          user.houseNumber,
          user.postCode,
          user.city,
          user.birthDate,
          user.phoneNumber,
          user.email,
          user.username,
          user.password,
          user.accountOwner,
          user.bankName,
          user.iban,
          user.bic,
          user.cityOfRegistration,
          user.dateOfRegistration
        ],
        (err, rows, fields) => {
          if (!err) resolve(rows);
          else reject(err);
        }
      );
    });
  }

  deleteUser(req) {
    return new Promise((resolve, reject) => {
      this.conn.query(
        "DELETE FROM user WHERE userId = ?",
        [req.params.id],
        (err, rows, fields) => {
          if (!err) resolve(rows);
          else reject(err);
        }
      );
    });
  }
};
