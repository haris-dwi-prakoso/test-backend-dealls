const { sequelize, Payslip, PayPeriod, Attendance, Overtime, Reimbursement } = require('../db/models');
const { Op } = require('sequelize');
const { isAdmin, getUser } = require('../services/user');

async function generatePayslip(req, res) {
    let userId = req.headers['user-id'];
    let { payPeriodId } = req.body;
    try {
        if (!userId) res.status(403).json({ message: "User ID of employee is required" });
        if (!payPeriodId) res.status(403).json({ message: "Attendance payroll period ID is required" });
        let userData = await getUser(Number(userId));
        if (userData === null) res.status(404).json({ message: "Employee not found" });
        let payPeriodData = await PayPeriod.findOne({ where: { id: payPeriodId } });
        if (!payPeriodData.isClosed) res.status(403).json({ message: "Attendance payroll period is not processed yet." });
        let attendancePay = await Attendance.findAll({
            attributes: [
                id,
                date,
                checkInTime,
                checkOutTime,
                amount
            ],
            where: {
                id: Number(userId),
                date: {
                    [Op.between]: [payPeriodData.start, payPeriodData.end]
                }
            }
        });
        let totalAttendancePay = await Attendance.sum('amount', {
            where: {
                id: Number(userId),
                date: {
                    [Op.between]: [payPeriodData.start, payPeriodData.end]
                }
            }
        });
        let overtimePay = await Overtime.findAll({
            attributes: [
                id,
                date,
                hours,
                amount
            ],
            where: {
                id: Number(userId),
                date: {
                    [Op.between]: [payPeriodData.start, payPeriodData.end]
                }
            }
        });
        let totalOvertimePay = await Overtime.sum('amount', {
            where: {
                id: Number(userId),
                date: {
                    [Op.between]: [payPeriodData.start, payPeriodData.end]
                }
            }
        });
        let reimbursementPay = await Reimbursement.findAll({
            attributes: [
                id,
                date,
                amount,
                description
            ],
            where: {
                id: Number(userId),
                date: {
                    [Op.between]: [payPeriodData.start, payPeriodData.end]
                }
            }
        });
        let totalReimbursementPay = await Reimbursement.sum('amount', {
            where: {
                id: Number(userId),
                date: {
                    [Op.between]: [payPeriodData.start, payPeriodData.end]
                }
            }
        });
        let totalTakeHomePay = totalAttendancePay + totalOvertimePay + totalReimbursementPay;
        let payslipData = await Payslip.create({
            userId: Number(userId),
            payPeriodId: payPeriodId,
            takeHomePay: totalTakeHomePay,
            createdBy: userData.username,
            updatedBy: userData.username
        });
        res.status(201).json({
            message: "Payslip successfully generated",
            payslip: {
                details: {
                    attendancePay,
                    overtimePay,
                    reimbursementPay
                },
                totalTakeHomePay
            }
        });
    } catch (err) {
        res.status(500), json(err);
    }
}

async function payslipSummary(req, res) {
    let userId = req.headers['user-id'];
    try {
        if (!userId) res.status(403).json({ message: "User ID of employee is required" });
        let userIsAdmin = await isAdmin(Number(userId));
        if (!userIsAdmin) res.status(403).json({ message: "Only admins may perform this action." });
        let payslipData = await Payslip.findAll({
            attributes: [
                userId,
                takeHomePay,
                [sequelize.fn("sum", sequelize.col("takeHomePay")), "totalTakeHomePay"]
            ],
            group: ["userId"]
        });
        let grandTotalTakeHomePay = await Payslip.sum('takeHomePay');
        res.status(200).json({
            message: "Payslip summary successfully generated.",
            summary: {
                payslipData,
                grandTotalTakeHomePay
            }
        })
    } catch (err) {
        res.status(500), json(err);
    }
}

module.exports = { generatePayslip, payslipSummary };