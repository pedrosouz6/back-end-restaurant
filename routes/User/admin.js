const AdminLogin = require('../../controllers/Users/controllerAdmin');

const express = require('express');
const router = express.Router();

router.post('/login/admin', AdminLogin.login);

module.exports = router;