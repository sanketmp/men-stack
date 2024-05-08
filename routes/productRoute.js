import express from "express";
import {
  getAllProducts,
  getOneProduct,
  addProduct,
  putProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getOneProduct);
router.post("/", addProduct);
router.put("/:id", putProduct);
router.delete("/:id", deleteProduct);

export default router;
