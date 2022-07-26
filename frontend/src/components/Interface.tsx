import React from "react"
import { useToDoContext } from "../context/ToDoContext"
import ToDoList from "./ToDoList"
import CreateToDo from "./CreateToDo"
import EditToDo from "./EditToDo"

const Interface = () => {
    const { view } = useToDoContext()

    switch (view) {
        case "ToDoList":
            return <ToDoList />
        case "AddToDo":
            return <CreateToDo />
        case "EditToDo":
            return <EditToDo />
        default:
            return <ToDoList />
    }
}

export default Interface