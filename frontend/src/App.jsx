import { useEffect, useState } from "react";
import "./App.css"
import myimage from './imgAndVideo/background.jpg'
import Axios from 'axios'

function App() {
  const [todo,setTodo] = useState('');
  const [newTodo, setnewTodo] = useState();
  const [completedtask, setcompletedtask] = useState(0)




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
  
  const completed = (id)=>{
    // setcompletedtask(completedtask+1)
    // const updatedtodo = newTodo.filter(item=>{
    //   return item.id  !== id 
    // })
    // setnewTodo([...updatedtodo])
  }  

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
              </div>
              )
            })
          
        }

      </div>
    </div>
  );
}

export default App;
