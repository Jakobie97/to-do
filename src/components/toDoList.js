import React from 'react'
import todo from './todo'
//comenents 
import ToDo from './todo'

function toDoList({todos, setTodos, filteredTodos}) {
    
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <ToDo  
                        setTodos={setTodos} 
                        todos={todos} 
                        key={todo.id}
                        todo={todo} 
                        text={todo.text} />
                ))}
            </ul>
        
            
        </div>
    )
}

export default toDoList