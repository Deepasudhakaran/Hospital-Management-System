const express = require('express');
const router = express.Router();
const patientController = require('../Controllers/patientController');

router.post('/insertPatient', patientController.insertPatientDetails);
router.get('/', patientController.getPatientDetails);
router.delete('/deletePatient/:id', patientController.deletePatientDetails);
router.put('/updatePatient/:id', patientController.updatePatientDetails);

module.exports = router;
