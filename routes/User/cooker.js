const Cooker = require('../../controllers/Users/controllerCooker');

const LoginCooker = require('../../Middleware/Cooker/login');
const RegisterMiddle = require('../../Middleware/Cooker/register');

const express = require('express');
const router = express.Router();

router.get('/all/cooker', Cooker.get);
router.post('/login/cooker', Cooker.login);
router.get('/login/jwt', LoginCooker)
router.post('/register/cooker', RegisterMiddle, Cooker.create);
router.delete('/delete/cooker/:id', Cooker.delete);
router.put('/update/cooker/:id', Cooker.update);

module.exports = router;