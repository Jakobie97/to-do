import React , { useState } from "react"
import './App.css';
//components
import Form from'./components/form.js'
import ToDoContainer from './components/toDoList'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  //git comment :)
  return (
    <div className="App">
        <header>
          <h2>Jacob's to-do list</h2>
        </header>
        <Form 
          inputText={inputText} 
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText} 
        />
        <ToDoContainer todos={todos} />
    </div>
  );
}

export default App;
