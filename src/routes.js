import { Router } from "express";
import { itemController } from "./controllers/itemController.js";

const router = Router();

router.get("/items", itemController.list);
router.get("/items/:id", itemController.get);
router.post("/items", itemController.create);
router.put("/items/:id", itemController.update);
router.delete("/items/:id", itemController.delete);

export default router;
