module.exports = {
  parseProducts: (products) => {
    return products.map((product) => ({
      id: product._id,
      title: product.title,
      url: product.url,
      description: product.description,
      price: product.price,
      stock: product.stock,
      created_at: product.createdAt,
    }));
  },
};
