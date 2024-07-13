import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"Hello"}]
}

export const TodoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodos:(state,action)=>{
            const todo={id:nanoid,
                text:action.payload}
                state.todos.push(todo)
        },
        removetodos:(state,action)=>{
            state.todos=state.todos.filtr((todo)=>todo.id !==action.payload)
        }
    }
})
export const {addtodos,removetodos}=TodoSlice.actions;
export default TodoSlice.reducer