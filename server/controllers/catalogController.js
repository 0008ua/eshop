const CatalogModel = require('../models/catalogModel');
const { DbError } = require('../errors');

getChildren = (req, res, next) => {
  const _id = req.params.id;
  CatalogModel.aggregate([
    {
      $match: { parent: _id },
    },
    {
      $sort: { order: 1 },
    },
  ])
    .then((result) => res.status(200).json(result))
    .catch((err) => next(new DbError({ message: 'Помилка отримання підкатегорії' })));
};

getScrollableChildren = (req, res, next) => {
  const _id = req.params.id;
  CatalogModel.aggregate([
    {
      $match: { scrollableForIds: _id },
    },
    {
      $sort: { order: 1 },
    },
  ])
    .then((result) => res.status(200).json(result))
    .catch((err) => next(new DbError({ message: 'Помилка отримання підкатегорії' })));
};

module.exports = {
  getChildren,
  getScrollableChildren,
};
