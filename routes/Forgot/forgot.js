const ControllerCooker = require('../../controllers/Forgot/ControllerForgot');
const MiddleCookerPassword = require('../../Middleware/Forgot/Cooker/password');

const express = require('express');
const router = express.Router();

router.post('/forgot/cooker', ControllerCooker.CookerEmail);
router.post('/password/cooker', MiddleCookerPassword, ControllerCooker.CookerPassword);

module.exports = router;