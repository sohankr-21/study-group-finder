const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  subject: String,
  time: String
});

module.exports = mongoose.model('User', userSchema);
