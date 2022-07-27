import React, { useState } from 'react';
import { useToDoContext } from '../context/ToDoContext';
import { reloadToDos } from "../utils/reloadToDos"

const CreateToDo = () => {
    const [status, setStatus] = useState<"pending" | "done">("pending")
    const [task, setTask] = useState("")
    const { createToDo, setTodos, changeView } = useToDoContext()

    const handleCreateToDo = async () => {
        await createToDo({ status, task })
        const updatedList = await reloadToDos();
        setTodos(updatedList)
        changeView("ToDoList")
    }

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
        <button className='btn btn-success my-2' onClick={handleCreateToDo}>
            Add
        </button>
        <button className='btn btn-error' onClick={() => changeView("ToDpoList")}>
            Cancel
        </button>
    </div>
}

export default CreateToDo