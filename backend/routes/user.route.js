
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.post('/insertUser', userController.insertUserDetails);
router.post('/userlogin', userController.userLogin);

module.exports = router;
