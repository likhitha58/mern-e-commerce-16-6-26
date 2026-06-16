const orderService=require("../services/orders.service");

const createorder=async(req,res)=>{
    try{
        const orderData=req.body;
        const result=await orderService.createorder(orderData);
        res.status(201).json({
            success:true,
            data:result,
        });
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message,
        });
    }
};

const getAllorders=async (req,res)=>{
    try{
        const orders=await orderService.getAllorders();
        res.status(200).json({
            success:true,
            data:orders,
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
        });
    }
};

const getorderById=async(req,res)=>{
    try{
        const order=await orderService.getorderById(req.params.id);
        res.status(200).json({
            success:true,
            data:order,
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
        });
    }
};

const updateorder=async(req,res)=>{
    try{
        const order=await orderService.updateorder(req.params.id,req.body);
        res.status(200).json({
            success:true,
            data:order,
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
        });
    }
};

const deleteorder = async (req, res) => {
    try {
        const result = await orderService.deleteorder(req.params.id);

        res.status(200).json({
            success: true,
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports={
    createorder,
    getAllorders,
    getorderById,
    updateorder,
    deleteorder
};