const Users = require('../models/user.model');

async function insertUserDetails(req, res) {
  try {
    const user = new Users(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function userLogin(req, res) {
  try {
    const { userName, password } = req.query;

    const matchedUser = await Users.findOne({ userName, password });
    if (matchedUser) {
      res.status(200).json([matchedUser]);
    } else {
      res.status(401).json([]);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  insertUserDetails, userLogin
};