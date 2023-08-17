const Order = require('../models/order');
const { databaseError } = require('../errors/customError');

const findAllOrders = () => {
  try {
    return Order.find()
  } catch (error) {
    throw databaseError('An error has occurred when retrieving all Orders');
  }
}

const createOrder = (data) => {
  try {
    const newOrder = new Order(data);
    return newOrder.save();
  } catch (error) {
    console.error(error.message);
    throw databaseError('An error has occurred when creating a Order');
  }
};

const updateOrder = (where, data) => {
  try {
    return Order.findOneAndUpdate(where, data)
  } catch (error) {
    console.error(error.message);
    throw databaseError('An error has occurred when updating a Order');
  }
}

module.exports = {
  findAllOrders,
  createOrder,
  updateOrder
};
