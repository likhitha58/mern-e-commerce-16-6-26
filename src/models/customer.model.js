const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

const customerCollections = () => {
    return getDB().collection("customers");
};

const createCustomer = async (customerData) => {
    return await customerCollections().insertOne(customerData);
};

const getAllCustomers = async () => {
    return await customerCollections().find().toArray();
};

const getCustomerById = async (id) => {
    return await customerCollections().findOne({
        _id: new ObjectId(id),
    });
};

const updateCustomer = async (id, data) => {
    return await customerCollections().updateOne(
        {
            _id: new ObjectId(id),
        },
        {
            $set: data,
        }
    );
};

const deleteCustomer = async (id) => {
    return await customerCollections().deleteOne({
        _id: new ObjectId(id),
    });
};

module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
};