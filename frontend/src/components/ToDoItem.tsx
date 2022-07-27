import React from 'react';
import { useToDoContext } from '../context/ToDoContext';
import { reloadToDos } from "../utils/reloadToDos"
import { Edit, Delete } from "./Buttons"

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
        <li className='item'>
            <span className={todo.status === 'done' ? 'badge badge-sm badge-success' : 'badge badge-sm badge-info'}>{todo.status}</span>
            <span className='mr-auto'>{todo.task}</span>
            <button className='btn btn-sm btn-warning' onClick={handleEditButton}><Edit /></button>
            <button className='btn btn-sm btn-error' onClick={handleDeleteButton}><Delete /></button>
        </li>
    )
}

export default ToDoItem