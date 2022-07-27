import http from "./http";

interface ToDo {
    id?: number
    status: "pending" | "done"
    task: string
}


export const reloadToDos = async () => {
    const response = await http.get("/todos");
    return Object.values(response.data) as ToDo[];
};