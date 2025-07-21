const Patients = require('../models/patient.model');

async function insertPatientDetails(req, res) {
  try {
    const patient = new Patients(req.body);
    const saved = await patient.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

async function getPatientDetails(req, res) {
  try {
    const patients = await Patients.find();
    res.status(200).json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


async function deletePatientDetails(req, res) {
  try {
    await Patients.findByIdAndDelete(req.params.id);
    res.json({ message: 'Patient deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updatePatientDetails(req, res) {
  try {
    const updated = await Patients.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  insertPatientDetails, getPatientDetails, deletePatientDetails, updatePatientDetails
};