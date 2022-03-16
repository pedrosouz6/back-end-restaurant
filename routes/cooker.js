const Cooker = require('../controllers/controllerCooker');

//const LoginCooker = require('../Middleware/CookerLogin');
const Register = require('../Middleware/Cooker/resgiter');

const express = require('express');
const router = express.Router();

router.get('/all/cooker', Cooker.get);
router.post('/login/cooker', Cooker.login);
router.post('/register/cooker', Register, Cooker.create);
router.delete('/delete/cooker/:id', Cooker.delete);
router.put('/update/cooker/:id', Cooker.update);

module.exports = router;