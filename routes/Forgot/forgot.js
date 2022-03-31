const ControllerCooker = require('../../controllers/Forgot/ControllerForgot');
const MiddleCookerPassword = require('../../Middleware/Forgot/Cooker/password');
const MiddleWaiterPassword = require('../../Middleware/Forgot/Waiter/password');

const express = require('express');
const router = express.Router();

router.post('/forgot/cooker', ControllerCooker.CookerEmail);
router.post('/password/cooker', MiddleCookerPassword, ControllerCooker.CookerPassword);
router.post('/forgot/waiter', ControllerCooker.WaiterEmail);
router.post('/password/waiter', MiddleWaiterPassword, ControllerCooker.WaiterPassword);

module.exports = router;