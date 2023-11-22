const mysql = require('mysql')


// conneting to database 
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'ashim',
    database:'todolist'
})

db.connect((err)=>{
    if(err){
        console.log('error connecting to database')
    }
    else{
        console.log("database connected")
    }
})

module.exports = db