const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendance');

router.post('/submit', attendanceController.submitAttendance);

module.exports = router;