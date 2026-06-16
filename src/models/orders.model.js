const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

const orderCollections = () => {
  return getDB().collection("orders");
};

const createorder = async (orderData) => {
  return await orderCollections().insertOne(orderData);
};

const getAllorders = async () => {
  return await orderCollections().find().toArray();
};

const getorderById = async (id) => {
  return await orderCollections().findOne({
    _id: new ObjectId(id),
  });
};

const updateorder = async (id, data) => {
  return await orderCollections().updateOne(
    {
      _id: new ObjectId(id),
    },
    { $set: data },
  );
};

const deleteorder=async(id)=>{
    return await orderCollections().deleteOne({
        _id: new ObjectId(id),
    });
};

module.exports={
    createorder,
    getAllorders,
    getorderById,
    updateorder,
    deleteorder
};
