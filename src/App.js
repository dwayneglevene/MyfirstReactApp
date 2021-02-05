import React, {useState} from "react";
import './App.css';
import {TodoForm} from './components/TodoForm';
import TodoList from "./components/TodoList";

function App() {
    const [todos,setTodos] = useState({});

    function addTodo(todo){
        setTodos([todo,...todos]);


    }
  return (
      <div>
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
        <TodoForm addTodo={addTodo} />
        <TodoList todo={todos} />
      </header>
    </div>
    </div>
  );
}

export default App;
