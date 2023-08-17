module.exports = {
  parseOrders: (orders) => {
    return orders.map((orders) => ({
      id: orders._id,
      status: orders.status,
      shipping_address: orders.shippingAddress,
      shipping_promise: orders.ShippingPromise,
      created_at: orders.createdAt,
    }));
  },
};
