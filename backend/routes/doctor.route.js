const express = require('express');
const router = express.Router();
const doctorController = require('../Controllers/doctorController');

router.post('/insertDoctor', doctorController.insertDoctorDetails);
router.get('/', doctorController.getDoctorDetails);
router.delete('/deleteDoctor/:id', doctorController.deleteDoctorDetails);
router.put('/updateDoctor/:id', doctorController.updateDoctorDetails)

module.exports = router;
