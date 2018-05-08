var mysql = require('mysql')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
// var express// formidable


var db = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"password",
    database:"dbynad",
    port:8889
})

db.connect( err => {
    if(err){console.log('ERROR'); process.exit()}
    console.log('CONNECTED')
})

// var stmt = "SELECT * FROM users"

// db.query( stmt , ( err , ajData ) =>{
//     console.log("ajData", ajData)
// })

var messages = [{text:'Whats up?', owner: 'Katrin'},{text:'Not much!', owner: 'Birna'}];

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// create router with express that will let us seperate and orginaize our differnt routes
// We will make one router for our general purpous web api routes and later another one for authentication specific routes
// new router
var api = express.Router();

api.get('/messages', (req, res) => {
    // res.send('hello')
    res.json(messages)
})

api.post('/messages', (req, res) => {
    // res.send('hello')
    // console.log(req.body)
    // res.json(messages)

    // push message to body in service chat c
    messages.push(req.body)
    // status ok
    // res.sendStatus(200);
    res.json(req.body);
})

// tell express to use our new router
// creates base route for the first property. 
//So in order to acces our routes now, we have to start with /api/...
app.use('/api', api)





// app.post("/save-user", (req, res) => { 
//     console.log(req.fields)
// }

// //Insert user into database
// var jUser = 
// {
//     "firstname": 'Mai',
//     "lastname": 'Saerker',
//     "profession": 'Web',
//     "description": 'I do web',
//     "email": 'a@s.com',
//     "password": '1234',
//     "profile_image": 'img.jpg',
//     "phone_number": '004527520067',
//     "instagram_url": 'https://www.instagram.com/annesaerker/',
//     "facebook_url": 'https://www.facebook.com/annesaerker',
//     "twitter_url": null,
//     "roles_idroles": 1,
//     "location_idlocation": 1,
//     "thread_idthread": null } 

// var stmt = 'INSERT INTO users SET ?'
// db.query(stmt, jUser, (err, jData)=>{
//     console.log("uData",jData);
//     if(jData.affectedRows == 1){
//         console.log('great, JSON user inserted');
//     }
//     //uData {"fieldCount":0,"affectedRows":1,"insertId":7,"serverStatus":2,"warningCount":0,"message":"","protocol41":true,"changedRows":0}
// })

//Listening to port
var port = 1982
app.listen(port, err => {
    if(err) {
        console.log("error");
        return
    }
    console.log("server is running on port 1982");
})