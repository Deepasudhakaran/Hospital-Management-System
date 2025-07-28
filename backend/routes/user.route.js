
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.post('/insertUser', userController.insertUserDetails);
router.post('/userlogin', userController.userLogin);
router.post('/userinsertAppointment', userController.insertAppointmentDetails);

module.exports = router;
