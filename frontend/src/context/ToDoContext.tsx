import React, { createContext, useContext, useState, useEffect } from 'react';
import http from "../utils/http"

interface ToDoProviderProps {
    children: React.ReactElement
}

interface ToDo {
    id?: number
    status: "pending" | "done"
    task: string
}

interface ToDoContextValue {
    createToDo: (data: ToDo) => Promise<void>;
    todos: ToDo[];
    setTodos: (todos: ToDo[]) => void
    updateToDo: (toDoId: number, data: ToDo) => Promise<void>;
    deleteToDo: (toDoId: number) => Promise<void>;
    changeView: (value: string) => void;
    view: string;
    getToDoId: (id: number) => void;
    toDoId: number;
}

const ToDoContext = createContext({} as ToDoContextValue)

export const useToDoContext = () => {
    return useContext(ToDoContext)
}

export const ToDoProvider = ({ children }: ToDoProviderProps) => {
    const [todos, setTodos] = useState([] as ToDo[])
    const [view, setView] = useState("ToDoList")
    const [toDoId, setToDoId] = useState(0)
    const createToDo = async (data: ToDo) => {
        await http.post("/todos", data).catch(e => console.log(e))
    }
    const updateToDo = async (toDoId: number, data: ToDo) => {
        await http.put(`/todos/${toDoId}`, data).catch(e => console.log(e))
    }
    const deleteToDo = async (toDoId: number) => {
        await http.delete(`/todos/${toDoId}`).catch(e => console.log(e))
    }
    const changeView = (value: string) => setView(value)
    const getToDoId = (id: number) => setToDoId(id)

    useEffect(() => {
        const readAllToDos = async () => {
            await http.get("/todos").then(
                response => {
                    const responseArr = Object.values(response.data) as ToDo[];
                    setTodos(responseArr);
                }
            ).catch(e => console.log(e));

        };
        readAllToDos();
    }, []);

    const value = {
        createToDo,
        todos,
        setTodos,
        updateToDo,
        deleteToDo,
        changeView,
        view,
        getToDoId,
        toDoId
    }
    return (
        <ToDoContext.Provider value={value}>
            {children}
        </ToDoContext.Provider>
    )
}