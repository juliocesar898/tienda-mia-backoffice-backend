const { findAllProducts, createProduct } = require('../services/products');
const { v4 } = require('uuid');

const createNewProduct = ({
  title,
  isoCode,
  description,
  url,
  price,
  stock,
}) => {
  try {
    const dataNew = {
      uid: v4(),
      isoCode,
      title,
      description,
      url,
      price,
      stock,
    };
    return createProduct(dataNew);
  } catch (error) {
    throw error;
  }
};

module.exports = { createNewProduct };
