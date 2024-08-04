import React from 'react'

export default function ToDoCard({ children, handleDeleteToDo, index, handleEditToDo } = props) {
  return (
    <li className='todoItem'>
      <p>{children}</p>
      <div className='actionsContainer'>
        <button onClick={()=>{
          handleEditToDo(index)
        }}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={()=>{
          handleDeleteToDo(index)
        }}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>

    </li>
  )
}
