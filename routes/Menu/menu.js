const ControllerDish = require('../../controllers/Menu/ControllerDish');

const express = require('express');
const router = express.Router();

router.post('/add/dish', ControllerDish.add);
router.get('/get/dish', ControllerDish.get);

module.exports = router;