const Admin = require('../../controllers/Users/controllerAdmin');

const express = require('express');
const router = express.Router();

router.post('/login/admin', Admin.login);
router.get('/get/users/:typeUser', Admin.getUsers);
router.delete('/delete/user/:typeUser/:id', Admin.deleteUser);

module.exports = router;