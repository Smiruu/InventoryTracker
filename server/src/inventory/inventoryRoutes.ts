import { Router } from "express";
import { InventoryController } from "./inventoryController";

const router = Router();
const controller = new InventoryController();

router.get("/", controller.getAll);
router.post("/", controller.create);

export default router;