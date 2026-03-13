/*TodoItem.tsx*/ 
import "./App.css"
import type { TodoProps } from "./App"

function TodoItem({ todos, setTodos }: TodoProps) {

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const toggleTodo = (id: number) => {
    setTodos(prevTodos => (
      prevTodos.map(t =>
        t.id === id ? {...t, completed: !t.completed}: t
      )
    ))
  }

  return(
    <div className="todo-display">
      {todos.map((todo) => (
        <div className="todo-item">
          <input 
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className='toggle'
          />
          <a className={todo.completed ? "completed" : ""} key={todo.id}>{todo.text}</a>
          <button className="btn" onClick={() => deleteTodo(todo.id)}>-</button>
        </div>
      ))}
    </div>
  )
}

export default TodoItem