/*App.tsx*/
import { useState } from 'react'
import './App.css'
import Input from'./Input'
import type { Todo } from "./Input";

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="app">
      <h1 className='title'>todo!!</h1>
      <Input todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
