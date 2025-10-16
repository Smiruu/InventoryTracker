import { Request, Response, NextFunction } from "express";
import { InventoryService } from "./inventoryService";

//make instance
const service = new InventoryService();

export class InventoryController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await service.getAllItems();
      res.json({ items, message: "U GOT THE ITEMS" });
    } catch (err: any) {
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, quantity, price } = req.body;
      const item = await service.createItem(name, quantity, price);
      res.status(201).json(item);
    } catch (err: any) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const idParam = req.params.id;
      if (!idParam) {
        return res.status(400).json({ message: "Item ID is required in URL." });
      }

      const id = parseInt(idParam, 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Item ID must be a number." });
      }

      const data = req.body;
      const updatedItem = await service.updateItem(id, data);

      if (!updatedItem) {
        return res
          .status(404)
          .json({ message: `Item with ID ${id} not found.` });
      }

      res.json({ updatedItem, message: "Item updated successfully" });
    } catch (err: any) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const idParam = req.params.id;
      if (!idParam) {
        return res.status(400).json({ message: "Item ID is required in URL." });
      }

      const id = parseInt(idParam, 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Item ID must be a number." });
      }

      const result = await service.delete(id);

      if (!result) {
        return res
          .status(404)
          .json({ message: `Item with ID ${id} not found.` });
      }

      res.status(200).json({ message: "Item deleted successfully" });
    } catch (err: any) {
      next(err);
    }
  }
}
