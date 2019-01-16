
module.exports = class Members{

    constructor(connection){
        this.conn = connection
    }

    createMember(member){
        var sql = "INSERT INTO members2 (email, firstname, lastname) VALUES (?,?,?)";
        return new Promise((resolve,reject)=>{
            this.conn.query(
                sql,
                [member.email, member.firstname, member.lastname],
                (err, rows, fields) => {
                  if (!err) resolve(rows);
                  else reject(err);
                }
              );
        })
        
    }
}