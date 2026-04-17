const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  dob: { type: String, required: true }, // DDMMYYYY
  class: String,
  mobile: String,
  email: String,
  registeredAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['active', 'blocked'], default: 'active' },
  blockReason: String,
  blockedAt: Date
});

module.exports = mongoose.model('Student', studentSchema);
