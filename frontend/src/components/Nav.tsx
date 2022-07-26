import React from 'react'
import { useToDoContext } from '../context/ToDoContext'

const Navigation = () => {
    const { view, changeView } = useToDoContext();
    return (
        <nav>
            <button
                onClick={() => changeView("ToDoList")}
            >
                ToDo List
            </button>
            <button
                onClick={() => changeView("AddToDo")}
            >
                Add New
            </button>
        </nav>
    )
}

export default Navigation