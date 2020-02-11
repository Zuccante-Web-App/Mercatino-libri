let mysql = require('mysql')


module.exports.Database = class Database {

    constructor(config) {
        this.connection = mysql.createConnection(config)
    }

    async connect() {
        return new Promise((resolve, reject)=> {
            this.connection.connect((err)=> {
                if(err)
                    reject(err)
                resolve()
            });
        })
    }

    async query(sql)  {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, (err, result) => {
                if(err)
                    reject(err)
                resolve(result)
            })
        })
    }

}