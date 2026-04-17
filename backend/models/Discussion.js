const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  testId: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  link: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Discussion', discussionSchema);
