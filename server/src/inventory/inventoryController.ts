import { Request, Response, NextFunction } from "express";
import { InventoryService } from "./inventoryService";

//make instance
const service = new InventoryService();

export class InventoryController {

    async getAll(req: Request, res: Response, next:NextFunction) {
        try {
            const items = await service.getAllItems()
            res.json({items, message:"U GOT THE ITEMS"})
        } catch (err: any) {
            next(err)
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const {name, quantity, price} = req.body;
            const item = await service.createItem(name, quantity, price);
            res.status(201).json(item)
        } catch (err: any) {
            next(err)
        }
    }
}