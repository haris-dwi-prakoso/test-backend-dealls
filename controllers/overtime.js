const { Overtime } = require('../db/models');
const { getUser } = require('../services/user');
const moment = require('moment-timezone');

async function submitOvertime(req, res) {
    let userId = req.headers['user-id'];
    let { hours } = req.body;
    try {
        if (!userId) res.status(403).json({ message: "User ID of employee is required" });
        if (!hours) res.status(403).json({ message: "Overtime hours is required" });
        let time = new Date();
        let date = moment(time).tz("Asia/Jakarta");
        if (date.day() === 0 || date.day() === 6) res.status(403).json({ message: "Cannot submit overtime on weekends" });
        if (date.hour() < 17) res.status(403).json({ message: "Cannot submit overtime before work is over" });
        let dateString = date.format("YYYY-MM-DD");
        let userData = await getUser(Number(userId));
        if (userData === null) res.status(404).json({ message: "Employee not found" });
        if (hours > 3) res.status(403).json({ message: "Maximum overtime is 3 hours" });
        let existingOvertime = await Overtime.findOne({
            where: {
                userId: Number(userId),
                date: dateString
            }
        });
        if (existingOvertime) res.status(403).json({ message: "Employee has already submitted overtime for this day" });
        let payAmount = Math.round(userData.salary * hours / 63);
        let overtimeData = await Overtime.create({
            userId: Number(userId),
            date: dateString,
            hours: hours,
            amount: payAmount,
            isPaid: false,
            createdBy: userData.username,
            updatedBy: userData.username
        });
        res.status(201).json({ message: "Successfully submitted overtime" });
    } catch (err) {
        res.status(500), json(err);
    }
}

module.exports = { submitOvertime };