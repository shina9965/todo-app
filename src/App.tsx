/*App.tsx*/
import { useState } from 'react'
import './App.css'
import Input from'./Input'
import TodoItem from './TodoItem';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


function App() {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const chengeDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
  <div className={darkMode ? "page darkmode" : "page"}>
    <button className="change-darkmode-btn" onClick={chengeDarkMode}></button>

    <div className="app">
      <h1 className="title">todo!!</h1>
      <Input todos={todos} setTodos={setTodos} />
      <TodoItem todos={todos} setTodos={setTodos} />
    </div>
  </div>
  )
}

export default App
