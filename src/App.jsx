import { Fragment, useEffect, useState } from "react";
import "./styles.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
export default function App () {
  

  //& Sates
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("ITEM")) || []
  });

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos])

  //& Functions
  function addTodo(title) {
    //^ Add todos when user clicks add
        //* if you want to use the current value of a state you should pass a function to the set method
        setTodos(currentTodos => {
          return [...currentTodos, {id: crypto.randomUUID(), title, completed: false}]})
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }

        return todo
    })
  })
}

  


  return (
    <>
    <Form addTodo={addTodo}/>
    <h1 className="header">Todo List</h1>
    {todos.length===0 && "No todos added yet"}
    <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    
    </>
    

  )
}