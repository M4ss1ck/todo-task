import { Request, Response } from "express"
import TODO from "../models/ToDo"

export const getToDos = async (req: Request, res: Response) => {
    const query = await TODO.query()
    res.json(query)
}