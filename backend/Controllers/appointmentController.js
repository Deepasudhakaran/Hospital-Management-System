const Appointment = require('../models/appointment.model');

exports.insertAppointmentDetails = async (req, res) => {
  try {
    console.log('Received body:', req.body);
    const appointment = new Appointment(req.body);
    const saved = await appointment.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('Error saving appointment:', err.message);
    res.status(400).json({ error: err.message });
  }
};

exports.getAppointmentDetails = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAppointmentDetails = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: 'appointment deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.updateAppointmentDetails = async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


