const express=require("express");
const router=express.Router();
const ordersHandler=require("../handlers/orders.handler");

router.post("/",ordersHandler.createorder);
router.get("/",ordersHandler.getAllorders);
router.get("/:id",ordersHandler.getorderById);
router.put("/:id",ordersHandler.updateorder);
router.delete("/:id",ordersHandler.deleteorder);

module.exports=router;