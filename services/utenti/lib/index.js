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
    
    app.use( bodyParser.json());       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })) // to support URL-encoded bodies

    app.post('/addUser', (req,res) => {
        userManager.createUser(req.body).then((result, err) => {
            console.log(result)
            res.json(result)
        })
    })

    app.delete('/deleteUser/:id', (req, res) => {
        userManager.deleteUser(req.params['id']).then((err, result) => {
            res.json({status : 'OK'});
        })
    })

    app.put('/updateUser/:id', (req, res) => {
        userManager.updateUser(req.params['id']).then((err, result) => {
            res.json({status : 'OK'});
        })
    })

    app.get('/getUserInfo/:id', (req, res) => {
        userManager.getUserInfo(req.params['id']).then((result) => {
            res.json(result);
        })
    })

    app.listen(port, ()=>{
        console.log('User microservice has started and is using port: ' + port + '\n')
    })

}


main()