import React from 'react'
import { useDispatch,useSelector } from 'react-redux';

const Home = () => {
  const todos=useSelector(state=>state.todos)
  const dispatch=useDispatch();
  return (
   <ul className='list-none '>
   {todos.map((todo)=>{
    return(
      <>
   <li 
   key={todo.id}
   className='mt-4 w-72 text-white bg-zinc-800 flex justify-between items-center px-4 py-2 rounded'>{todo.text}</li>
   <button 
   onClick={()=>dispatch(todo.id)}
    className='text-white bg-red-500 border-0 h-10 px-4 py-1 mt-4 focus:outline-none
    hover:bg-red-500 rounded text-md'>Delete</button>
   </>
    )
   })}
   </ul>
  )
}

export default Home