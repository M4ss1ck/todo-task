import React, { useState, useEffect } from 'react';
import Navigation from './Nav';
import { useToDoContext } from '../context/ToDoContext';

const EditToDo = () => {
    const { updateToDo, toDoId } = useToDoContext()
    const [status, setStatus] = useState<"pending" | "done">("pending")
    const [task, setTask] = useState("")
    // const data = JSON.stringify({
    //     "data": {
    //         "status": status,
    //         "task": task
    //     }
    // })
    const handleEditToDo = () => updateToDo(toDoId, { status, task })
    return <div>
        <h2>Edit ToDo</h2>
        <Navigation />
    </div>
}

export default EditToDo