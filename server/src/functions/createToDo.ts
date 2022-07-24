import { Request, Response } from "express"
import TODO from "../models/ToDo"

export const createToDo = async (req: Request, res: Response) => {
    const { status, task } = req.body;
    const newToDo = await TODO.query().insert({
        status, task
    })
    res.json(newToDo)
}