import React, { useState } from 'react';
import Navigation from './Nav';
import { useToDoContext } from '../context/ToDoContext';

const CreateToDo = () => {
    const [status, setStatus] = useState<"pending" | "done">("pending")
    const [task, setTask] = useState("")
    const { createToDo } = useToDoContext()
    const handleCreateToDo = () => createToDo({ status, task })
    return <div>
        <h2>Add new ToDo</h2>
        <Navigation />
    </div>
}

export default CreateToDo