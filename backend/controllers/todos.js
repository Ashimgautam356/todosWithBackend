const db = require('../database/database')

const todos = (req, res)=>{
   db.query('SELECT * FROM todos',((err,result)=>{
    if(err){
        console.log("error")
    }else{
        res.json(result)
    }
   }))
}

const postTodo = (req,res)=>{
    const todoname = req.body.todoname;
    const completed = req.body.completed;

    db.query('INSERT INTO todos (todoname,completed) VALUES(?,?)',[todoname,completed],(err=>{
        if(err){
            console.log("error while inseting into the database")
        }else{
            res.send('todo inserted')
        }
    }))
    
}

module.exports = {
    todos,
    postTodo,
}