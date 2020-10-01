import React from 'react';

const Todo = ({text, todos , setTodos , todo}) => {
    // event

    const deleteHandler = () => {
        // todos.filter will go through all current todos and filter out the id that is not equal to todo.id
        setTodos(todos.filter(e => e.id !== todo.id))

        console.log(todo)
    };

    const completeHandler = () => {

        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"/>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-check"/>
            </button>
        </div>
    )
}

export default Todo;