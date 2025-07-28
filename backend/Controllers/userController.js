const Users = require('../models/user.model');
const Appointment = require('../models/appointment.model');
const bcrypt = require('bcrypt');

async function insertUserDetails(req, res) {
  try {
    const { userName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Users({ userName, email, password: hashedPassword });
    const savedUser = await user.save();
    const { password: _, ...userWithoutPassword } = savedUser.toObject();
    res.status(201).json(userWithoutPassword);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function userLogin(req, res) {
  try {
    const { userName, password } = req.body; 

    const matchedUser = await Users.findOne({ userName });
    if (!matchedUser) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, matchedUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const { password: _, ...userWithoutPassword } = matchedUser.toObject();
    res.status(200).json(userWithoutPassword);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}



async function insertAppointmentDetails (req, res) {
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

module.exports = {
  insertUserDetails, userLogin,insertAppointmentDetails
};