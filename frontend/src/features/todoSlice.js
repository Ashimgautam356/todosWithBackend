import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Axios } from "axios";

let i  = Axios.get('http://localhost:3001/todos/get').then(data => console.log(data));
console.log(i)
const initialState = {
  todos: {},
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    added: async (state, action) => {

      const todo  = await Axios.post("http://localhost:3001/todos/post", {
        todoname: action.payload.todoname,
        completed: action.payload.completedtask,
      })
    },
    done: async (state,action) =>{
        const complete = await Axios.put(`http://localhost:3001/todos/post/${action.payload.id}`,({
            completed: action.payload.completed
          }))
    },
    deleteHandler: async (state,action) =>{
        const deletetodo = await Axios.delete(`http://localhost:3001/todos/post/${action.payload.id}`)
    },
    deleteAll: async (sate,action) =>{
        const deleteall = await Axios.delete('http://localhost:3001/todos/deleteall')
    }

  },
});


export const {added,done,deleteHandler,deleteAll} = todoSlice.actions

export default todoSlice.reducer