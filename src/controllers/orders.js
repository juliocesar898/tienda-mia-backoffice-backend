const { createNewOrder, getAllOrders } = require('../interactors/orders');
const { parseOrders } = require('../serializers/orders');

const newOrder = ({ body }, res, next) =>
  createNewOrder(body)
    .then(() => res.status(201).send())
    .catch(next);

const getOrders = (_, res, next) =>
  getAllOrders()
    .then((orders) => res.status(200).send(parseOrders(orders)))
    .catch(next);

module.exports = { newOrder, getOrders };
