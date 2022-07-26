import React from 'react'
import Navigation from './Nav'
import ToDoItem from './ToDoItem'
import { useToDoContext } from '../context/ToDoContext'

const ToDoList = () => {
    const { todos } = useToDoContext()
    return <div className='min-h-screen flex flex-col items-center md:text-xl'>
        <h1 className='header'>List</h1>
        <ul className='mb-auto mt-4 flex flex-col items-center justify-center'>
            {todos.map((todo) => todo.id && <ToDoItem key={todo.id} id={todo.id} todo={todo} />)}
        </ul>
        <Navigation />
    </div>
}

export default ToDoList