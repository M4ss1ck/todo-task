import React from "react";
import { ToDoProvider } from "./src/context/ToDoContext"

export const wrapRootElement = ({ element }) => (
    <ToDoProvider>
        {element}
    </ToDoProvider>
)