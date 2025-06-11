const { PayPeriod, Attendance, Overtime, Reimbursement } = require('../db/models');
const { Op } = require('sequelize');
const { isAdmin, getUser } = require('../services/user');
const moment = require('moment-timezone');

async function createPayPeriod(req, res) {
    let userId = req.headers['user-id'];
    let { start, end } = req.body;
    try {
        let userIsAdmin = await isAdmin(Number(userId));
        if (!userIsAdmin) res.status(403).json({ message: "Only admins may perform this action." });
        let userData = await getUser(Number(userId));
        let isStartValid = moment(start, "YYYY-MM-DD").isValid();
        let isEndValid = moment(end, "YYYY-MM-DD").isValid();
        if (!isStartValid || !isEndValid) res.status(403).json({ message: "Invalid date format on start or end dates." });
        let existingPeriod = await PayPeriod.findOne({
            where: {
                [Op.or]: [
                    {
                        start: {
                            [Op.between]: [start, end]
                        }
                    },
                    {
                        end: {
                            [Op.between]: [start, end]
                        }
                    }
                ]
            }
        });
        if (existingPeriod) res.status(403).json({ message: "Start or end dates conflict with an existing attendance payroll period." });
        let payPeriodData = await PayPeriod.create({
            start: start,
            end: end,
            isClosed: false,
            createdBy: userData.username,
            updatedBy: userData.username
        });
        res.status(201).json({ message: "Attendance payroll period successfully registered" });
    } catch (err) {
        res.status(500), json(err);
    }
}

async function processPayroll(req, res) {
    let userId = req.headers['user-id'];
    let { payPeriodId } = req.body;
    try {
        let userIsAdmin = await isAdmin(Number(userId));
        if (!userIsAdmin) res.status(403).json({ message: "Only admins may perform this action." });
        if (!payPeriodId) res.status(403).json({ message: "Attendance payroll period ID is required" });
        let userData = await getUser(Number(userId));
        let payPeriodData = await PayPeriod.findOne({ where: { id: payPeriodId } });
        if (!payPeriodData) res.status(404).json({ message: "Attendance payroll period does not exist." });
        if (payPeriodData.isClosed) res.status(403).json({ message: "Attendance payroll period is already closed." });
        let updateAttendances = await Attendance.update(
            {
                isPaid: true,
                updatedBy: userData.username
            },
            {
                where: {
                    date: {
                        [Op.between]: [payPeriodData.start, payPeriodData.end]
                    }
                }
            }
        );
        let updateOvertimes = await Overtime.update(
            {
                isPaid: true,
                updatedBy: userData.username
            },
            {
                where: {
                    date: {
                        [Op.between]: [payPeriodData.start, payPeriodData.end]
                    }
                }
            }
        );
        let updateReimbursements = await Reimbursement.update(
            {
                isPaid: true,
                updatedBy: userData.username
            },
            {
                where: {
                    date: {
                        [Op.between]: [payPeriodData.start, payPeriodData.end]
                    }
                }
            }
        );
        let updatePayPeriod = await PayPeriod.update(
            {
                isClosed: true,
                updatedBy: userData.username
            },
            { where: { id: payPeriodId } }
        );
        res.status(200).json({ message: "Payroll successfully processed." })
    } catch (err) {
        res.status(500), json(err);
    }
}

module.exports = { createPayPeriod, processPayroll };