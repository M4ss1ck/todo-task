import React, { useState, useEffect } from 'react';
import Navigation from './Nav';
import { useToDoContext } from '../context/ToDoContext';

const EditToDo = () => {
    const { updateToDo, toDoId, todos } = useToDoContext()
    const currentToDo = todos.find(todo => todo.id === toDoId)
    const [status, setStatus] = useState<"pending" | "done">(currentToDo?.status ?? "pending")
    const [task, setTask] = useState(currentToDo?.task ?? "")
    // const data = JSON.stringify({
    //     "data": {
    //         "status": status,
    //         "task": task
    //     }
    // })
    const handleEditToDo = () => updateToDo(toDoId, { status, task })
    return <div className='min-h-screen flex flex-col'>
        <h2 className='header'>Edit ToDo</h2>
        <div className='form-control flex flex-row'>
            <label className='label'>Status</label>
            <select className="select px-2 py-2 mx-2 my-4 w-28" onChange={(e) => setStatus(e.target.value as "pending" | "done")} defaultValue={currentToDo?.status ?? "pending"}>
                <option value="pending">Pending</option>
                <option value="done">Done</option>
            </select>
        </div>
        <textarea className="textarea textarea-bordered h-24" defaultValue={currentToDo?.task ?? "Type task here"} onChange={(e) => setTask(e.target.value)}></textarea>
        <button className='btn mb-auto mt-2' onClick={handleEditToDo}>
            Update
        </button>
        <Navigation />
    </div>
}

export default EditToDo