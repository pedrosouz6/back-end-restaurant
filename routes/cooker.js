const Cooker = require('../controllers/controllerCooker');

const express = require('express');
const router = express.Router();

router.get('/all/cooker', Cooker.get);
router.post('/register/cooker', Cooker.create);
router.delete('/delete/cooker/:id', Cooker.delete);
router.put('/update/cooker/:id', Cooker.update);

module.exports = router;