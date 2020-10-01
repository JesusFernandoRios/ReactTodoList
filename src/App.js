import React, {useState, useEffect} from 'react';
import './App.css'
import Form from './components/form'
import TodoList from './components/todolist'


function App() {
  //state 
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filter, setFilter] = useState([])

  // run Once when the app start
  useEffect(() => {
    getLocalTodos()
  },[])

  //useEffect
  useEffect(() => {
    filterHandler();
    saveStorage();
  },[todos, status])

  // functions
  const filterHandler = () =>{
    switch(status){
      case "completed":
        setFilter(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilter(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilter(todos);
        break;
      
    } 
  }
  // save to local storage
  const saveStorage = () => {
    localStorage.setItem("todos",JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      
      <header>
        <h1>BBs Todo List</h1>
      </header>
        {/* by setting the valuefuntion(setinputText) as an attribute  you are able to pass it to the From Component */}
      <Form 
      inputText={inputText} 
      setInputText={setInputText} 
      setTodos={setTodos} 
      todos={todos}
      setStatus={setStatus}
      />
      <TodoList 
      setTodos={setTodos}
      todos={todos}
      setFilter={setFilter}
      filter={filter}
      />
      
      
    </div>
  );
}

export default App;
