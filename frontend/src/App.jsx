import { useEffect, useState } from "react";
import "./App.css"
import myimage from './imgAndVideo/background.jpg'
import Axios from 'axios'

function App() {
  const [todo,setTodo] = useState('');
  const [newTodo, setnewTodo] = useState();
  const [completedtask, setCompletedtask] = useState(0)
  const [taskcounter,setTaskcounter] = useState(0)




  const add = async()=>{
    try{
      const response = await Axios.post('http://localhost:3001/todos/post',{
        todoname:todo, 
        completed:completedtask,
      })
      Axios.get('http://localhost:3001/todos/get').then(res => setnewTodo(res.data))
      // gettodos();
      setTodo('')
    }
    catch(error){
      console.log("error frontend: "+ error)
    }
  }
  
  const completed = async(id)=>{
    setCompletedtask(1)
    try{ 
      const connection = Axios.put(`http://localhost:3001/todos/post/${id}`,({
        completed: completedtask
      }))
      Axios.get('http://localhost:3001/todos/get').then(res => setnewTodo(res.data))

    }catch(err){
      console.log(err)
    }
  }  

  const deletehandler = async(id)=>{
    try{

      const connection = Axios.delete(`http://localhost:3001/todos/post/${id}`)
      Axios.get('http://localhost:3001/todos/get').then(res => setnewTodo(res.data))

  }catch(err){
    console.log(err)
  }
  }


  const deleteall = async () => {
    try {
      const connection = await Axios.delete('http://localhost:3001/todos/deleteall');
      Axios.get('http://localhost:3001/todos/get').then(res => setnewTodo(res.data))

      console.log('Response:', connection.status, connection.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  const keyhandler = (e)=>{
    if(e.key ==="Enter"){
      add();
    }
  }
  return (
    <div className="App">
      <img src={myimage} alt="backgroundIMg" />
      <div className="app-Area">
      {/* header */}
      <div className="header">
          <div className="logo">
            <h1>Todo Web-App</h1>
          </div>
          <div className="input-section">
            <input type="text" placeholder="New Todo.." onChange={(e)=>{setTodo(e.target.value)}} onKeyDown={(e)=> {keyhandler(e)}}/>
            <button onClick={add} type="submit">Add</button>
            <button onClick={deleteall}>delete all</button>
          </div>
          <p>Completed Task :{completedtask}</p>
        </div>

        {/* body */}

        {
            newTodo?.map((items)=>{
              return(
                <div key={items.id} className="item-box">
                <p>{items.id}</p>
                <h3>{items.todoname}</h3>
                <button onClick={()=>{completed(items.id)}}>Completed</button>
                <button onClick={()=>deletehandler(items.id)}>delete</button>
              </div>
              )
            })
          
        }

      </div>
    </div>
  );
}

export default App;
