const express = require('express');
const router = express.Router();
const mypageController = require('../controllers/mypageController');

router.post('/', mypageController.mypg);

module.exports = router;