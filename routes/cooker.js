const Cooker = require('../controllers/controllerCooker');

//const LoginCooker = require('../Middleware/CookerLogin');
const RegisterMiddle = require('../Middleware/Cooker/register');

const express = require('express');
const router = express.Router();

router.get('/all/cooker', Cooker.get);
router.post('/login/cooker', Cooker.login);
router.post('/register/cooker', RegisterMiddle, Cooker.create);
router.delete('/delete/cooker/:id', Cooker.delete);
router.put('/update/cooker/:id', Cooker.update);

module.exports = router;