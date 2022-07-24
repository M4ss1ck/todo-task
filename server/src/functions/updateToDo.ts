import { Request, Response } from "express"
import TODO from "../models/ToDo"

export const updateToDo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, task } = req.body;
    const query = await TODO.query().findById(id).patch({ status, task });
    res.json(query)
}