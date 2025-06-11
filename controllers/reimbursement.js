const { Reimbursement } = require('../db/models');
const { getUser } = require('../services/user');
const moment = require('moment-timezone');

async function submitReimbursement(req, res) {
    let userId = req.headers['user-id'];
    let { amount, description } = req.body;
    try {
        if (!userId) res.status(403).json({ message: "User ID of employee is required" });
        if (!amount) res.status(403).json({ message: "Reimbursement amount is required" });
        if (!description) description = null;
        let time = new Date();
        let date = moment(time).tz("Asia/Jakarta");
        let dateString = date.format("YYYY-MM-DD");
        let userData = await getUser(Number(userId));
        if (userData === null) res.status(404).json({ message: "Employee not found" });
        let reimbursementData = await Reimbursement.create({
            userId: Number(userId),
            date: dateString,
            amount: amount,
            description: description,
            isPaid: false,
            createdBy: userData.username,
            updatedBy: userData.username
        });
        res.status(201).json({ message: "Successfully submitted reimbursement" });
    } catch (err) {
        res.status(500), json(err);
    }
}

module.exports = { submitReimbursement };