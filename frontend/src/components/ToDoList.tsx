import React from 'react'
import Navigation from './Nav'
import ToDoItem from './ToDoItem'
import { useToDoContext } from '../context/ToDoContext'

const ToDoList = () => {
    const { todos } = useToDoContext()
    return <div>
        <ul>
            {todos.map((todo, index) => <ToDoItem key={index} id={index} />)}
        </ul>
        <Navigation />
    </div>
}

export default ToDoList