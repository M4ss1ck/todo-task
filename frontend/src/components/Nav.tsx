import React from 'react'
import { useToDoContext } from '../context/ToDoContext'

const Navigation = () => {
    const { view, changeView } = useToDoContext();
    return (
        <nav className='tabs'>
            <button
                onClick={() => changeView("ToDoList")}
                className={view === "ToDoList" ? "tab tab-lg tab-bordered tab-active" : "tab tab-lg tab-bordered"}
            >
                ToDo List
            </button>
            <button
                onClick={() => changeView("AddToDo")}
                className={view === "AddToDo" ? "tab tab-lg tab-bordered tab-active" : "tab tab-lg tab-bordered"}
            >
                Add New
            </button>
        </nav>
    )
}

export default Navigation