const express =require("express");
const customerRoutes=require("./routes/customer.routes");
const productsRoutes=require("./routes/products.routes");

const app=express();
app.use(express.json());
app.use("/customers",customerRoutes);
app.use("/products",productsRoutes);

module.exports=app;
