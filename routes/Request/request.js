const Request = require('../../controllers/Requests/ControllerResquest');

const express = require('express');
const router = express.Router();

router.post('/add/request', Request.add);
router.get('/get/request/:id', Request.get);
router.get('/get/all/request', Request.getAllRequests);
router.put('/update/request/:id/:status', Request.updateStatus);

module.exports = router;