const orderModel=require("../models/orders.model");

const createorder=async(orderData)=>{
    if(!orderData.name){
        throw new Error("OrderName is required");
    }
    return await orderModel.createorder(orderData);
};

const getAllorders=async()=>{
    return await orderModel.getAllorders();
};

const getorderById=async(id)=>{
    return await orderModel.getorderById(id);
};

const updateorder=async(id,data)=>{
    return await orderModel.updateorder(id,data);
};

const deleteorder=async(id)=>{
    return await orderModel.deleteorder(id);
};

module.exports={
    createorder,
    getAllorders,
    getorderById,
    updateorder,
    deleteorder
}