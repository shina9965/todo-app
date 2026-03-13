/*Input.tsx*/
import "./App.css"
import { useState, useRef} from "react"
import type {TodoProps} from "./App"

function Input({ todos, setTodos }: TodoProps){

  const [input, setInput] = useState('');
  const nextId = useRef(1);

  const addTodoText = (event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value);

  const addTodo = () => {
    if(input.trim()){
      setTodos(
        [...todos, {
          id:nextId.current++,
          text: input,
          completed: false,
        }]
      )
      setInput("")
      console.log(todos);
    }

  }

  return (
    <div className="create-todo-area">
      <input className="input-area" type="text" value={input} onChange={addTodoText}/>
      <button className="btn" onClick={addTodo}>+</button>
    </div>
  );
}

export default Input