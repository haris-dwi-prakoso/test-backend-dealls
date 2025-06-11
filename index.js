const express = require('express');
require("dotenv").config();
const attendanceRouter = require('./routes/attendance');
const overtimeRouter = require('./routes/overtime');
const reimbursementRouter = require('./routes/reimbursement');
const payPeriodRouter = require('./routes/payperiod');
const payslipRouter = require('./routes/payslip');

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./db/models');
db.sequelize.sync();

app.use('/attendance', attendanceRouter);
app.use('/overtime', overtimeRouter);
app.use('/reimbursement', reimbursementRouter);
app.use('/payroll', payPeriodRouter);
app.use('/payslip', payslipRouter);

app.listen(port, () => {
    console.log(`App running in ${port}`);
});