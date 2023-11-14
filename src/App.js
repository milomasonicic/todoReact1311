import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


let nextId = 0

function App() {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  return(
    <div>
      <h1>Inspiring sculptors:</h1>

      <input
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
        <button onClick={() => {
          setTodos((prevTodos) => 
            [...prevTodos, 
            {
              id: nextId++,
              task: todo,
              completed: false,
            }
            ])
       
      }}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>id:{todo.id}  task:{todo.task}  completed:{String(todo.completed)}
          <span> 

            <button onClick={() => {
              setTodos(
                todos.filter(t =>
                  t.id !== todo.id
                )
              );
            }} > Delete</button>

            <input type='checkbox' onChange={() => {
            setTodos((prevTodos) => prevTodos.map((t) =>
            t.id === todo.id ? {...t, completed: !t.completed} : t
            ))
          }}></input>

          </span>
          </li>
        ))}
      </ul>


    </div>
  )
  
}

export default App;
