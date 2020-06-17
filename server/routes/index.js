const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/', express.static(path.join(__dirname, '/../../public'), { redirect: false }));


router.use('*', (req, res, next) => res.sendFile(path.resolve('public/index.html')));

module.exports.router = router;
