const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const config = require('../config');

const ProductSchema = new Schema({
  _id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  parent: {
    type: String,
    require: true,
  },
  picture: {
    type: String,
    default: config.get('defaults.productPicture'),
  },
  description: {
    type: String,
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

const ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;
