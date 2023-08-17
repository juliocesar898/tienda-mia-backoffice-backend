const { createNewProduct } = require('../interactors/products');
const { parseProducts } = require('../serializers/products');
const { findAllProducts } = require('../services/products');

const saveProduct = ({ body }, res, next) =>
  createNewProduct(body)
    .then(() => res.status(201).send())
    .catch(next);

const getAllProducts = (_, res, next) =>
  findAllProducts()
    .then((products) => res.status(200).send(parseProducts(products)))
    .catch(next);

module.exports = { saveProduct, getAllProducts };
