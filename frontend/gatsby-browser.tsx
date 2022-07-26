import React from "react";
import { ToDoProvider } from "./src/context/ToDoContext"
import './src/styles/global.css'

export const wrapRootElement = ({ element }) => (
    <ToDoProvider>
        {element}
    </ToDoProvider>
)