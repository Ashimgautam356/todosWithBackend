import { useEffect, useState } from "react";
import "./App.css"
import myimage from './imgAndVideo/background.jpg'
import {useDispatch} from 'react-redux'
import {added,done,deleteHandler,deleteAll} from './features/todoSlice'


function App() {
  const [todo,setTodo] = useState('');
  const [newTodo, setnewTodo] = useState();
  const [completedtask, setCompletedtask] = useState(0)
  const [taskcounter,setTaskcounter] = useState(0)



  const dispatch = useDispatch()

  const add = ()=>{
    dispatch(added({todoname:todo,completedtask: completedtask }));
    setTodo('')
  }
  
  const completed = (id)=>{
      dispatch(done({completed:1, id:id}))
  }  

  const deletehandler = (id)=>{
    dispatch(deleteHandler({id:id}))
  }


  const deleteall = async () => {
    dispatch(deleteAll())
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
