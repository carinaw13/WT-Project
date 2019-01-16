
module.exports = class Tests{

    constructor(connection){
        this.conn = connection
    }

    createTest(test){
        var sql = "INSERT INTO test (name) VALUES (?)";
        return new Promise((resolve,reject)=>{
            this.conn.query(
                sql,
                [test.name],
                (err, rows, fields) => {
                  if (!err) resolve(rows);
                  else reject(err);
                }
              );
        })
        
    }
}