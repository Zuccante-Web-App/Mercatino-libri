let mysql = require('mysql')

class Database {

    constructor(config) {
        this.connection = mysql.createConnection(config)
    }

    connect() {
        return new Promise((resolve, reject)=> {
            this.connection.connect((err)=> {
                if(err)
                    reject(err)
                resolve()
            });
        })
    }

    query(sql) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, (err, result) => {
                if(err)
                    reject(err)
                resolve(result)
            })
        })
    }

}

module.exports.Database = Database;

/*
con.connect((error)=> {
    if(error) {
        console.log("errore!")
    }
    let sql = "SELECT * FROM `Utenti`"
    con.query(sql, (error, result) => {
        console.log(result)
    })
})*/