const { findAllOrders, createOrder } = require('../services/orders');
const { v4 } = require('uuid');

const createNewOrder = ({
  shippingAddress,
  deliveryTime,
  user,
}) => {
  try {
    const dataNew = {
      uid: v4(),
      shippingAddress,
      ShippingPromise: addHours(deliveryTime, new Date()),
      user,
    };
    return createOrder(dataNew);
  } catch (error) {
    throw error;
  }
};

const getAllOrders = () => {
  try {
    return findAllOrders();
  } catch (error) {
    throw error;
  }
};

function addHours (hours, date = new Date()) {  
  if (typeof hours !== 'number') {
    throw new Error('Invalid "hours" argument')
  }

  if (!(date instanceof Date)) {
    throw new Error('Invalid "date" argument')
  }

  date.setHours(date.getHours() + hours)

  return date
}

module.exports = { createNewOrder, getAllOrders };
