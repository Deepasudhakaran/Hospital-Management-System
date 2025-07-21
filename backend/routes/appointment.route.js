const express = require('express');
const router = express.Router();
const appointmentController = require('../Controllers/appointmentController');

router.post('/insertAppointment', appointmentController.insertAppointmentDetails);
router.get('/', appointmentController.getAppointmentDetails);
router.delete('/deleteAppointment/:id', appointmentController.deleteAppointmentDetails);
router.put('/updateAppointment/:id', appointmentController.updateAppointmentDetails)

module.exports = router;



