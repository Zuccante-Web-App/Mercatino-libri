let express = require('express')
let app = express()
let port = 3000;

let user_creator = require('./routes/create_users')
app.post('/addUser', user_creator)

let user_deleter = require('./routes/delete_user')
app.delete('/deleteUser/:id', user_deleter)

let user_updater = require('./routes/update_user')
app.put('/updateUser/:id', user_updater)

let user_info_getter = require('./routes/get_users')
app.get('/getUserInfo/:id', user_info_getter)

app.listen(port, ()=>{
    console.log('User microservice has started and is using port: ' + port + '\n')
})