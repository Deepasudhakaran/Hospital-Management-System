const express = require('express');
const router = express.Router();

const doctorRoutes = require('./doctor.route');
const appointmentRoutes = require('./appointment.route');
const patientRoutes = require('./patient.route')

router.get('/', (req, res) => {
  res.json("App Ready");
});

router.use('/doctors', doctorRoutes);
router.use('/appointments',appointmentRoutes );
router.use('/patients',patientRoutes );

module.exports = router;
