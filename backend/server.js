const express   = require('express')
const app = express()
const todo = require('./routes/todo')
const cors = require('cors')


// setting up the middleware
app.use(cors())
app.use(express.json())

app.use('/todos', todo);






app.listen(3001, ()=>{
    console.log("......listining.....")
})