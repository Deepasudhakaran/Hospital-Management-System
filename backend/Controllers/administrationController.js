
const Administration = require('../models/administration.model');
const bcrypt = require('bcrypt');


async function administrationLogin(req, res) {
  try {
    const { userName, password } = req.body;

    const matchedUser = await Administration.findOne({ userName });
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


module.exports = {
  administrationLogin
};