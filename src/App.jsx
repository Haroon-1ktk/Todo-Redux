import AddTodo from './components/AddTodo'; 
import Todos from './components/Todos';
function App() {
  
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-400'>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App