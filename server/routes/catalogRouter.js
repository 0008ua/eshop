const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogController');

router.get('/get-children/:id', catalogController.getChildren);

router.get('/get-scrollable-children/:id', catalogController.getScrollableChildren);

module.exports = router;
