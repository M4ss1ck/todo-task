import React, { useState } from 'react';
import { useToDoContext } from '../context/ToDoContext';

interface ToDoItemCtx {
    id: number
}

const ToDoItem = ({ id }: ToDoItemCtx) => {
    const [open, setOpen] = useState(true)
    const { deleteToDo, changeView, getToDoId } = useToDoContext()
    const handleClick = () => setOpen(!open)
    const handleEditButton = () => {
        getToDoId(id)
        changeView("EditToDo")
    }
    return (
        <div>
            {id}
            <button onClick={handleEditButton}>Edit</button>
            <button onClick={() => deleteToDo(id)}>Delete</button>
        </div>
    )
}

export default ToDoItem