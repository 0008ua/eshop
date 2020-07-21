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

/**
* Return siblings of category(_id)
*
* @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @return  {object[]} // Catalog items array
*/
getAllSiblingsOfCurrentCategory = (req, res, next) => {
  const _id = req.query.id;
  CatalogModel
    .aggregate([
      { $match: { _id } },
      {
        $lookup: {
          from: 'catalogs',
          localField: 'parent',
          foreignField: 'parent',
          as: 'siblings',
        },
      },
      { $unwind: '$siblings' },
      { $replaceRoot: { newRoot: '$siblings' } },
    ])
    .then((result) => res.status(200).json(result))
    .catch((err) => next(new DbError(new DbError({ message: 'Помилка завантаження навігації' }))));
};

module.exports = {
  getChildren,
  getScrollableChildren,
  getAllSiblingsOfCurrentCategory,
};
