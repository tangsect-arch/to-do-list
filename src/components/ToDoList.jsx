import React from 'react';
import ToDoCard from './ToDoCard';

export default function ToDoList({ todos, handleDeleteToDo, handleEditToDo} = props) {
    return (
        <ul className='main'>{
            todos.map((todo, index) => (
                <ToDoCard key={index} handleDeleteToDo = {handleDeleteToDo} index = {index} handleEditToDo = {handleEditToDo}>
                    {todo}
                </ToDoCard>
            ))
        }
        </ul>
    );
}
