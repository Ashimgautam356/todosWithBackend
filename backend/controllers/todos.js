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

const updateTodo = (req,res)=>{
    const completed = req.body.completed;
    const {id }= req.params;
    db.query('UPDATE todos SET completed = ? WHERE id = ? ',[Number(completed), id],(err=>{
        if(err){
            console.log("error while updating the value in database"+ err)
        }else{
            res.send('value updated')
        }
    }))
}

const deletetodo = (req,res)=>{
    const {id} = req.params
    db.query('DELETE FROM todos WHERE id = ?',[id],(err=>{
        if(err){
            console.log('error while delting in database ' + err)
        }else{
            res.send('todo deleted')
        }
    }))
}

const deletealltodo = (req,res)=>{
    db.query('TRUNCATE TABLE todos',((err)=>{
        if(err){
            console.log("error")
        }else{
            res.send('deleted')
        }
       })
       )
}
module.exports = {
    todos,
    postTodo,
    updateTodo,
    deletetodo,
    deletealltodo,
}