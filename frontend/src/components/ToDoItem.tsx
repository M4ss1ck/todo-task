import React from 'react';
import { useToDoContext } from '../context/ToDoContext';
import { reloadToDos } from "../utils/reloadToDos"

interface ToDo {
    status: "pending" | "done"
    task: string
}

interface ToDoItemCtx {
    id: number
    todo: ToDo
}

const ToDoItem = ({ id, todo }: ToDoItemCtx) => {
    const { deleteToDo, changeView, getToDoId, setTodos } = useToDoContext()
    const handleEditButton = () => {
        getToDoId(id)
        changeView("EditToDo")
    }

    const handleDeleteButton = async () => {
        await deleteToDo(id)
        const updatedList = await reloadToDos()
        setTodos(updatedList)
        changeView("ToDoList")
    }

    return (
        <div className='flex flex-row gap-2 w-full sm:min-w-[24rem] md:min-w-[36rem] my-2 items-center'>
            <span className={todo.status === 'done' ? 'badge badge-sm badge-success' : 'badge badge-sm badge-info'}>{todo.status}</span>
            <span className='mr-auto'>{todo.task}</span>
            <button className='btn btn-sm' onClick={handleEditButton}><Edit /></button>
            <button className='btn btn-sm' onClick={handleDeleteButton}><Delete /></button>
        </div>
    )
}

const Edit = () => <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg>

const Delete = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>

export default ToDoItem