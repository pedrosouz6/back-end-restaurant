const ControllerCooker = require('../../controllers/Forgot/ControllerForgot');
const MiddleCookerPassword = require('../../Middleware/Forgot/Cooker/password');
const MiddleWaiterPassword = require('../../Middleware/Forgot/Waiter/password');
const MiddleAdminPassword = require('../../Middleware/Forgot/Admin/password');

const express = require('express');
const router = express.Router();

router.post('/forgot/cooker', ControllerCooker.CookerEmail);
router.put('/password/cooker', MiddleCookerPassword, ControllerCooker.CookerPassword);

router.post('/forgot/waiter', ControllerCooker.WaiterEmail);
router.put('/password/waiter', MiddleWaiterPassword, ControllerCooker.WaiterPassword);

router.post('/forgot/admin', ControllerCooker.AdminEmail);
router.put('/password/admin', MiddleAdminPassword, ControllerCooker.AdminPassword);

module.exports = router;