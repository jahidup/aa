const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  questionId: String,
  selectedAnswer: mongoose.Schema.Types.Mixed,
  isCorrect: Boolean,
  marksAwarded: Number
});

const resultSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  testId: { type: String, required: true },
  score: { type: Number, required: true },
  rank: Number,
  submittedAt: { type: Date, default: Date.now },
  answers: [answerSchema]
});

resultSchema.index({ testId: 1, studentId: 1 }, { unique: true });
module.exports = mongoose.model('Result', resultSchema);
