import React, { useState } from 'react';
import { useToDoContext } from '../context/ToDoContext';
import { reloadToDos } from "../utils/reloadToDos"

const EditToDo = () => {
    const { updateToDo, toDoId, todos, changeView, setTodos } = useToDoContext()
    const currentToDo = todos.find(todo => todo.id === toDoId)
    const [status, setStatus] = useState<"pending" | "done">(currentToDo?.status ?? "pending")
    const [task, setTask] = useState(currentToDo?.task ?? "")

    const handleEditToDo = async () => {
        await updateToDo(toDoId, { status, task })
        const updatedList = await reloadToDos();
        setTodos(updatedList)
        changeView("ToDoList")
    }
    return <div className='flex flex-col justify-center min-h-screen'>
        <h2 className='header'>Edit ToDo</h2>
        <div className='flex flex-row form-control'>
            <label className='label'>Status</label>
            <select className="px-2 py-2 mx-2 my-4 select w-28" onChange={(e) => setStatus(e.target.value as "pending" | "done")} defaultValue={currentToDo?.status ?? "pending"}>
                <option value="pending">Pending</option>
                <option value="done">Done</option>
            </select>
        </div>
        <textarea className="h-24 textarea textarea-bordered" defaultValue={currentToDo?.task ?? "Type task here"} onChange={(e) => setTask(e.target.value)}></textarea>
        <button className='my-2 btn btn-success' onClick={handleEditToDo}>
            Update
        </button>
        <button className='btn btn-error' onClick={() => changeView("ToDpoList")}>
            Cancel
        </button>
    </div>
}

export default EditToDo