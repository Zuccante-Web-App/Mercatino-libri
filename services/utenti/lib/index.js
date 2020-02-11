let Database = require('./db').Database
let UserManager = require('./user_manager').UserManager
let express = require('express')
let bodyParser = require('body-parser')

async function main() {
    let db = new Database({
        host: "localhost",
        user: "root",
        password: "rickie19",
        database: "Mercatino-Libri"
    })

    await db.connect()

    let userManager = new UserManager(db)

    let app = express()
    let port = 3000;
    
    app.use( bodyParser.json() );       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
      extended: true
    }))

    let user_creator = require('./routes/create_users')
    app.post('/addUser', (req,res,next) => {
        userManager.createUser(req.body).then((err , result) => {
            if(err)
                res.json("Errore")
            res.json({status : 'OK'})
        })
    })

    let user_deleter = require('./routes/delete_user')
    app.delete('/deleteUser/:id', user_deleter)

    let user_updater = require('./routes/update_user')
    app.put('/updateUser/:id', user_updater)

    app.get('/getUserInfo/:id', (req, res, next) => {
        db.query("SELECT * FROM `Utenti` WHERE `id` = " + req.param("id")).then((result) => {
            res.json(result)
        })
    })

    app.listen(port, ()=>{
        console.log('User microservice has started and is using port: ' + port + '\n')
    })

}


main()