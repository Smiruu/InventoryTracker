import { Router } from "express";
import { InventoryController } from "./inventoryController";

const router = Router();
const controller = new InventoryController();

router.get("/", controller.getAll);
router.post("/", controller.create);
router.delete("/:id", controller.delete);
router.put("/:id", controller.update);

export default router;