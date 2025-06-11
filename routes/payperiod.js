const express = require('express');
const router = express.Router();
const payPeriodController = require('../controllers/payperiod');

router.post('/create', payPeriodController.createPayPeriod);
router.post('/process', payPeriodController.processPayroll);

module.exports = router;