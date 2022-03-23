const Request = require('../../controllers/Requests/ControllerResquest');

const express = require('express');
const router = express.Router();

router.get('/d', Request.add);

module.exports = router;