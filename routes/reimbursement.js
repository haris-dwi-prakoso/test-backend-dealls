const express = require('express');
const router = express.Router();
const reimbursementController = require('../controllers/reimbursement');

router.post('/submit', reimbursementController.submitReimbursement);

module.exports = router;