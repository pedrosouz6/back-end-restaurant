const ControllerCooker = require('../../controllers/Forgot/ControllerForgot');
const MiddleCooker = require('../../Middleware/Forgot/cooker');

const express = require('express');
const router = express.Router();

router.post('/forgot/cooker', ControllerCooker.cooker);

module.exports = router;