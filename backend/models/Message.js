const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  studentId: String,
  sender: { type: String, enum: ['student', 'admin'], required: true },
  content: { type: String, required: true },
  isUnblockRequest: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);
