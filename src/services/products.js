const Product = require('../models/product');
const { databaseError } = require('../errors/customError');

const findAllProducts = () => {
  try {
    return Product.find()
  } catch (error) {
    throw databaseError('An error has occurred when retrieving all products');
  }
}

const createProduct = (data) => {
  try {
    const newProduct = new Product(data);
    return newProduct.save();
  } catch (error) {
    console.error(error.message);
    throw databaseError('An error has occurred when creating a product');
  }
};

const updateProduct = (where, data) => {
  try {
    return Product.findOneAndUpdate(where, data)
  } catch (error) {
    console.error(error.message);
    throw databaseError('An error has occurred when updating a product');
  }
}

module.exports = {
  findAllProducts,
  createProduct,
  updateProduct
};
