const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  testId: { type: String, required: true, unique: true },
  testName: { type: String, required: true },
  duration: { type: Number, required: true }, // minutes
  marks: {
    correct: { type: Number, default: 1 },
    wrong: { type: Number, default: 0 },
    skip: { type: Number, default: 0 }
  },
  shuffle: { type: Boolean, default: false }
});

module.exports = mongoose.model('Test', testSchema);
