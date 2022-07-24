import { Request, Response } from "express"
import TODO from "../models/ToDo"

export const deleteToDo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const query = await TODO.query().deleteById(id)
    res.json(query)
}