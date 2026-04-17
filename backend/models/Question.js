const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  testId: { type: String, required: true },
  questionId: { type: String, required: true },
  type: { type: String, enum: ['mcq', 'numerical'], required: true },
  questionText: {
    en: { type: String, required: true },
    hi: String
  },
  options: [{
    en: String,
    hi: String
  }],
  correctAnswer: { type: mongoose.Schema.Types.Mixed, required: true },
  tolerance: Number, // for numerical
  marks: {
    correct: Number,
    wrong: Number,
    skip: Number
  },
  imageUrls: [String]
});

questionSchema.index({ testId: 1, questionId: 1 }, { unique: true });
module.exports = mongoose.model('Question', questionSchema);
