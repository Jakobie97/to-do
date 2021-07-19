import React from 'react'

const form = ({setInputText, todos, setTodos, inputText}) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)

    }
     const submitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.floor(Math.random()*1000) }])
        setInputText("");

    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
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
