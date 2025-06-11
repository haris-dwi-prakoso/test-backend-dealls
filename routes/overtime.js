const express = require('express');
const router = express.Router();
const overtimeController = require('../controllers/overtime');

router.post('/submit', overtimeController.submitOvertime);

module.exports = router;