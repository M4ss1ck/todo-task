import { Request, Response } from "express"
import TODO from "../models/ToDo"

export const createToDo = async (req: Request, res: Response) => {
    const { status, task } = req.body;
    const { max } = (await TODO.query().max("id") as any[])[0]
    const newToDo = await TODO.query().insert({
        status, task, id: max + 1
    })
    res.json(newToDo)
}