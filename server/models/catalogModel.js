const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
// const config = require('../config');

const CatalogSchema = new Schema({
  _id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  ancestors: {
    type: [String],
    required: true,
  },
  parent: {
    type: String,
    require: true,
  },
  scrollableForIds: {
    type: [String],
    required: true,
  },
  auth: {
    type: String,
    default: 'casual',
  },
  order: {
    type: Number,
  },
  picture: {
    type: String,
    // default: config.get('defaults.userPicture'),
  },
  description: {
    type: String,
  },
  prefix: {
    type: String,
    required: true,
  },
  seoTitle: {
    type: String,
    required: true,
  },
  seoMeta: {
    type: String,
    required: true,
  },
});

const CatalogModel = mongoose.model('catalogs', CatalogSchema);
module.exports = CatalogModel;
