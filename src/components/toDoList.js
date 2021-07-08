import React from 'react'
//comenents 
import ToDo from './todo'

function toDoList() {
    return (
        <div className="todo-container">
            <ul className="todo-list"></ul>
            <ToDo />
            <ToDo />
            
        </div>
    )
}

export default toDoList