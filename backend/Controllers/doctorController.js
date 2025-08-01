const Doctors = require('../models/doctor.model');

async function insertDoctorDetails(req, res) {
  try {
    const doctor = new Doctors(req.body);
    const savedDoctor = await doctor.save();
    res.status(201).json(savedDoctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
async function getDoctorDetails(req, res) {
  try {
    const doctors = await Doctors.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

async function deleteDoctorDetails(req, res) {
  try {
    console.log('Deleting doctor with ID:', req.params.id);
    await Doctors.findByIdAndDelete(req.params.id);
    res.json({ message: 'Doctor deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updateDoctorDetails(req, res) {
  try {
    const updated = await Doctors.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  insertDoctorDetails, getDoctorDetails, deleteDoctorDetails, updateDoctorDetails
};


