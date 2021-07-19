import React from 'react'
import todo from './todo'
//comenents 
import ToDo from './todo'

function toDoList({todos}) {
    console.log(todos)
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <ToDo text={todo.text} />
                ))}
            </ul>
        
            
        </div>
    )
}

export default toDoList