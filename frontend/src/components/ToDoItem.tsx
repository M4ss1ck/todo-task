import React, { useState } from 'react';
import { useToDoContext } from '../context/ToDoContext';

interface ToDo {
    status: "pending" | "done"
    task: string
}

interface ToDoItemCtx {
    id: number
    todo: ToDo
}

const ToDoItem = ({ id, todo }: ToDoItemCtx) => {
    const [open, setOpen] = useState(true)
    const { deleteToDo, changeView, getToDoId } = useToDoContext()
    const handleClick = () => setOpen(!open)
    const handleEditButton = () => {
        getToDoId(id)
        changeView("EditToDo")
    }
    return (
        <div className='flex flex-row gap-2 w-full sm:min-w-[24rem] md:min-w-[36rem] my-2 items-center'>
            <span className='mr-auto'>{todo.task}</span>
            <span className={todo.status === 'done' ? 'badge badge-success' : 'badge badge-info'}>{todo.status}</span>
            <button className='btn btn-sm' onClick={handleEditButton}>Edit</button>
            <button className='btn btn-sm' onClick={() => deleteToDo(id)}>Delete</button>
        </div>
    )
}

export default ToDoItem