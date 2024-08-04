import { useState, useEffect } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('')

  function persistData (newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddToDo(newTodo){
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function handleEditToDo(index){
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteToDo(index);
  }

  function handleDeleteToDo(index){
    let newToDo = [...todos]
    newToDo.splice(index, 1);
    persistData(newToDo)
    setTodos(newToDo);
  }

  useEffect(()=>{
    if(!localStorage)
        return
    
    let localTodos = localStorage.getItem('todos');
    if(!localTodos)
      return

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos)
  }, [])
  return (
    <>
      <ToDoInput handleAddToDo={handleAddToDo} todoValue = {todoValue} setTodoValue = {setTodoValue}/>
      <ToDoList handleDeleteToDo = {handleDeleteToDo} handleEditToDo = {handleEditToDo} todos={todos}/>
    </>
  )
}

export default App
