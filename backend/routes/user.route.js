
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const administrationController = require('../Controllers/administrationController')

router.post('/insertUser', userController.insertUserDetails);
router.post('/userlogin', userController.userLogin);
router.post('/userinsertAppointment', userController.insertAppointmentDetails);

router.post('/adminlogin', administrationController.administrationLogin);

module.exports = router;
