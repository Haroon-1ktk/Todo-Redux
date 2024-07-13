import React from 'react'
import Home from './components/Home';
import { useSelector } from 'react-redux';
import Addtodo from './components/Addtodo';
const App = () => {
 
  return (
    <div className='bg-emerald-300 flex flex-col justify-center items-center h-screen'>
      <h1 className='text-xl font-bold'>Todo List using Redux Toolkit</h1>
      <Addtodo/>
      <Home/>
    </div>
  )
}

export default App