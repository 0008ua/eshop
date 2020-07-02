const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/get-product/:id', productController.getProduct);

router.get('/get-products', productController.getProducts);

module.exports = router;
