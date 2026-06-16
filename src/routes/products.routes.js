const express=require("express");
const router=express.Router();
const productsHandler=require("../handlers/products.handler");

router.post("/",productsHandler.createProduct);
router.get("/",productsHandler.getAllProducts);
router.get("/:id",productsHandler.getProductById);
router.put("/:id",productsHandler.updateProduct);
router.delete("/:id",productsHandler.deleteProduct);

module.exports=router;