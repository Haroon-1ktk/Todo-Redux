import React from 'react'
import { useDispatch } from 'react-redux';
import { addtodos } from '../features/todo/todoSlice';
import { useState } from 'react';

const Addtodo = () => {
    const [input,setInput]=useState();
    const dispatch=useDispatch();
   const addTodoHandler=(e)=>{
    e.preventDefault();
    dispatch(addtodos(input))
    setInput(' ')
   }

  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-4'>
     <input type="text" className='bg-gray-800 text-white rounded border border-gray-700 focus:border-indigo-400
     focus:ring-2 focus:ring-indigo-700 text-base outline-none  py- px-3 leading-8
     duration-200 transition-colors ease-in-out'
     placeholder='Enter a Todo'
     value={input}
     onChange={(e)=>setInput(e.target.value)}/>
     <button className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600
     rounded text-lg'>
        Add Todo
     </button>
    </form>
  )
}

export default Addtodo