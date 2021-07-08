import React from 'react'

function form({setInputText, toDos, setTodos, inputText}) {

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)

    }
     const submitHandler = (e) => {
        e.preventDefault();
        setTodos([...toDos, {text: inputText, completed: false, id: Math.random()*1000 }])
        setInputText(" ");

    }

    return (
        <form>
            <input  onClick={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitHandler} className="todo-button" type="submit">+</button>

            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="complete">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default form
