const express = require('express');
const router = express.Router();
const payslipController = require('../controllers/payslip');

router.post('generate', payslipController.generatePayslip);
router.post('summary', payslipController.payslipSummary);

module.exports = router;