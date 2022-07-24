import { Request, Response } from "express"
import TODO from "../models/ToDo"

export const getToDoById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const query = await TODO.query().findById(id)
    res.json(query)
}