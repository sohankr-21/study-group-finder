const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { name, subject, time } = req.body;
  const user = new User({ name, subject, time });
  await user.save();
  res.json({ message: 'User signed up successfully', user });
});

module.exports = router;
