const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/match', async (req, res) => {
  const { subject, time } = req.body;
  const matches = await User.find({ subject, time });
  res.json(matches);
});

module.exports = router;
