import React , { useState } from "react"
import './App.css';
//components
import Form from'./components/form.js'
import ToDoContainer from './components/toDoList'

function App() {
  const [inputText, setInputText] = useState('')
  const [toDos, setTodos] = useState([])
//git commit :)
  return (
    <div className="App">
        <header>
          <h2>Jacob's to-do list</h2>
        </header>
        <Form inputText={inputText} toDos={toDos} setTodos={setTodos} setInputText={setInputText} />
        <ToDoContainer />
    </div>
  );
}

export default App;
