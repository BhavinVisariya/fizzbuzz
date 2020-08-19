const express = require('express');
const mainController = require('./../controller/main');

const router = express.Router();

router.get('/get-fizzbuzz-pattern', mainController.getFizzbuzzPattern);

module.exports = router;
