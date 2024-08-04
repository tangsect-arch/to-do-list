import { useState } from "react";
function ToDoInput({handleAddToDo, todoValue, setTodoValue} = props) {
    
    return (
        <header>
            <input id="inputId" placeholder="Enter todo" value={todoValue} onChange={(e)=>{
                setTodoValue(e.target.value)
            }}/>
            <button onClick={()=>{
                handleAddToDo(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}

export default ToDoInput
