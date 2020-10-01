import React from 'react'
import '../App.css'

// descructure props by setting {setinputtest as parameter} props.setinputtext, props.todos,props.setTodos,props.inputText
const Form = ({setInputText,todos,setTodos, inputText, setStatus}) => {
    // here i can write javascript code and function

    const inputTextHandler = ({target}) => {
        console.log(target.value)
        setInputText(target.value)
    };

    const submitTodoHandler = (e) => {
        e.preventDefault()
        // the array spread(...) will pass todos incase you already had todos
        // setTodos parameter is an array because the useState in app.js of setTodos cointains an array as parameter,so you are basically adding an object to the todos array and State
        setTodos([...todos, {text: inputText, completed: false, id:Math.random() * 1000}])
        setInputText("")
    };

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return(
        <form>
            {/* since we want to clear the inputvalue everytime we submit the State of inputText is clear so assigning the value of inputText it means the input will reset the state of the input to ""*/}
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form