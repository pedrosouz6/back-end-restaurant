const WaiterController = require('../controllers/controllerWaiter');
const MiddleWaiter = require('../Middleware/Waiter/register');

const express = require('express');
const router = express.Router();

router.post('/register/waiter', MiddleWaiter, WaiterController.create);
router.post('/login/waiter', WaiterController.login);
//terminar a feature login

module.exports = router;