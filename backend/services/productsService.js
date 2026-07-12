const { Product } = require('../models/index');

exports.findAll = async () => {
  return await Product.findAll();
};