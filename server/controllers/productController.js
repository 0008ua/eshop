const ProductModel = require('../models/productModel');

getProduct = (req, res, next) => {
  const _id = req.params.id;
  ProductModel.findOne({_id})
    .then((result) => res.status(200).json(result))
    .catch((err) => next(new DbError({ message: 'Помилка отримання товару' })));
};

getProducts = (req, res, next) => {
  ProductModel.aggregate([
    {
      $match: { parent: 'products' },
    },
    {
      $sort: { order: 1 },
    },
  ])
    .then((result) => res.status(200).json(result))
    .catch((err) => next(new DbError({ message: 'Помилка отримання товарів' })));
};

module.exports = {
  getProduct,
  getProducts,
};
