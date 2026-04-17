const router = require('express').Router();
const Student = require('../models/Student');
const Config = require('../models/Config');

// Admin login
router.post('/admin/login', async (req, res) => {
  const { password } = req.body;
  const config = await Config.findOne({ key: 'adminPassword' });
  const adminPass = config?.value || 'jahid'; // default
  if (password === adminPass) {
    res.json({ success: true, token: 'admin-token' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid password' });
  }
});

// Student login
router.post('/student/login', async (req, res) => {
  const { studentId, dob } = req.body;
  const student = await Student.findOne({ studentId });
  if (!student) return res.status(404).json({ success: false, message: 'Student not found' });
  if (student.dob !== dob) return res.status(401).json({ success: false, message: 'Invalid DOB' });
  if (student.status === 'blocked') {
    return res.status(403).json({ success: false, blocked: true, reason: student.blockReason });
  }
  res.json({ success: true, student });
});

module.exports = router;
