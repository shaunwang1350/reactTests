import React, {useState, useRef, useEffect} from 'react';
import TodoList from './components/TodoList';
import {v4 as uuidv4} from 'uuid'
import NavBar from "./components/navbar";

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo =>todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === '') return
    setTodos(prevTodos => {
      return [...prevTodos,{id: uuidv4(), name:name, complete: false}]
    })
    todoNameRef.current.value = null;
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  // const mystyle = {
  //   color: "white",
  //   backgroundColor: "DodgerBlue",
  //   padding: "10px",
  //   fontFamily: "Arial"
  // };

  return (
    <React.Fragment>
      <NavBar/>
      <br></br>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <input ref={todoNameRef} type="text"/>
        <button onClick={handleAddTodo} className="btn btn-primary btn-sm m-2">Add Todo</button>
        <button onClick={handleClearTodos} className="btn btn-secondary btn-sm m-2">Clear Complete</button>
        <div>{todos.filter(todo=> !todo.complete).length} left to do</div>
      <br></br>
      <p style={{}}> Created by Shaun Wang | 2010 </p>
    </React.Fragment>
  );
}

export default App;