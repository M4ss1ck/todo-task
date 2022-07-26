import React, { useState } from 'react';
import Navigation from './Nav';
import { useToDoContext } from '../context/ToDoContext';

const CreateToDo = () => {
    const [status, setStatus] = useState<"pending" | "done">("pending")
    const [task, setTask] = useState("")
    const { createToDo } = useToDoContext()
    const handleCreateToDo = () => createToDo({ status, task })

    return <div className='min-h-screen flex flex-col'>
        <h2 className='header'>New ToDo</h2>
        <div className='form-control flex flex-row'>
            <label className='label'>Status</label>
            <select className="select px-2 py-2 mx-2 my-4 w-28" onChange={(e) => setStatus(e.target.value as "pending" | "done")}>
                <option value="pending">Pending</option>
                <option value="done">Done</option>
            </select>
        </div>
        <textarea className="textarea textarea-bordered h-24" placeholder="Task" onChange={(e) => setTask(e.target.value)}></textarea>
        <button className='btn mb-auto mt-2' onClick={handleCreateToDo}>
            Add
        </button>
        <Navigation />
    </div>
}

export default CreateToDo