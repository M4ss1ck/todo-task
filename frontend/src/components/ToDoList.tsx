import React from 'react'
import ToDoItem from './ToDoItem'
import { useToDoContext } from '../context/ToDoContext'
import { Add } from './Buttons'

const ToDoList = () => {
    const { todos, changeView } = useToDoContext()
    return <div className='min-h-screen flex flex-col items-center md:text-xl'>
        <section className='flex flex-row'>
            <h1 className='header'>My ToDo list</h1>
            <div className="dropdown dropdown-end mt-4">
                <label tabIndex={0} className="btn btn-circle btn-ghost btn-xs text-info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </label>
                <div tabIndex={0} className="card compact dropdown-content shadow bg-base-100 rounded-box w-64 border border-content">
                    <div className="card-body">
                        <h2 className="card-title">This is the ToDo list</h2>
                        <p>Tap the pencil icon to edit a ToDo or the trash bin to delete it</p>
                    </div>
                </div>
            </div>
        </section>
        <ul className='my-4 flex flex-col items-center justify-center'>
            {todos.map((todo) => todo.id && <ToDoItem key={todo.id} id={todo.id} todo={todo} />)}
            <li className='item btn btn-sm btn-ghost h-10' onClick={() => changeView("AddToDo")}><Add /></li>
        </ul>
    </div>
}

export default ToDoList