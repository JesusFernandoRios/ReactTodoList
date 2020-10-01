import React from "react";
import Todo from './todo'



const TodoList = ({todos, setTodos, filter}) => {
    return(
        <div className ="todo-container">
            <ul className ="todo-list">
                {/* mapping the todos object and passing down the todos.textproperty to Todo Component */}
                {filter.map(todo => 
                // setting the key here so it applies to all li elements created
                    (<Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text}/>)
                )}
            </ul>
        </div>
    )
}

export default TodoList;