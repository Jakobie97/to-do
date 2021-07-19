import React , { useEffect, useState } from "react"
import './App.css';
//components
import Form from'./components/form.js'
import ToDoContainer from './components/toDoList'

function App() {

  

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFiliteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [])
  
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFiliteredTodos(todos.filter(todo => todo.completed == true));
        break;

      
      case 'uncompleted':
        setFiliteredTodos(todos.filter(todo => todo.completed == false));
        break;
    
      default:
        setFiliteredTodos(todos)
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify([]));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') ===null){
      localStorage.setItem('todos', JSON.stringify([])); //checks if we have it 
    }
    else {
      let todoLocal = JSON.parce(localStorage.getItem("todos"))
      setTodos(todoLocal) //push it 
    }
  }

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
          setStatus={setStatus}
          
        />
        <ToDoContainer filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
