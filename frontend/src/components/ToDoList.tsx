import React from 'react'
import ToDoItem from './ToDoItem'
import { useToDoContext } from '../context/ToDoContext'
import { Add } from './Buttons'
import Themes from './Themes'

const ToDoList = () => {
    const { todos, changeView } = useToDoContext()
    return <div className='flex flex-col items-center justify-center min-h-screen md:text-xl'>
        <section className='flex flex-row items-center justify-between w-full'>
            <div className='flex flex-row mx-auto'>
                <h1 className='header'>My ToDo list</h1>
                <div className="mt-4 dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-circle btn-ghost btn-xs text-info">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </label>
                    <div tabIndex={0} className="w-64 border shadow card compact dropdown-content bg-base-100 rounded-box border-content">
                        <div className="text-left card-body">
                            <p>Tap the pencil icon to edit a ToDo or the trash bin to delete it.</p>
                            <p>You can also add a new one.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Themes />
        </section>
        <ul className='flex flex-col items-center my-4 max-h-[80vh] overflow-y-auto overflow-x-hidden'>
            {todos && todos.map((todo) => todo.id && <ToDoItem key={todo.id} id={todo.id} todo={todo} />)}
            <li className='h-10 item btn btn-sm btn-ghost' onClick={() => changeView("AddToDo")}><Add /></li>
        </ul>
    </div>
}

export default ToDoList