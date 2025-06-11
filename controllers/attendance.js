const { Attendance } = require('../db/models');
const { getUser } = require('../services/user');
const moment = require('moment-timezone');

async function submitAttendance(req, res) {
    let userId = req.headers['user-id'];
    let { type } = req.body;
    try {
        if (!userId) res.status(403).json({ message: "User ID of employee is required" });
        if (!type) res.status(403).json({ message: "Attendance submission type is required" });
        let time = new Date();
        let date = moment(time).tz("Asia/Jakarta");
        if (date.day() === 0 || date.day() === 6) res.status(403).json({ message: "Cannot submit attendance on weekends" });
        let dateString = date.format("YYYY-MM-DD");
        let userData = await getUser(Number(userId));
        if (userData === null) res.status(404).json({ message: "Employee not found" });
        if (type === "Check In") {
            let existingCheckIn = await Attendance.findOne({
                where: {
                    userId: Number(userId),
                    date: dateString
                }
            });
            if (existingCheckIn !== null) res.status(403).json({ message: "Employee already checked in for this day" });
            else {
                checkInData = await Attendance.create({
                    userId: Number(userId),
                    date: dateString,
                    checkInTime: time,
                    checkOutTime: null,
                    amount: 0,
                    isPaid: false,
                    createdBy: userData.username,
                    updatedBy: userData.username
                });
                res.status(201).json({ message: "Successfully checked in" });
            }
        } else if (type === "Check Out") {
            let existingCheckIn = await Attendance.findOne({
                where: {
                    userId: Number(userId),
                    date: dateString
                }
            });
            if (existingCheckIn === null) res.status(403).json({ message: "Employee hasn't checked in for this day" });
            checkInHour = moment(existingCheckIn.checkInTime).tz("Asia/Jakarta").hour();
            checkOutHour = date.hour() < 17 ? date.hour() : 17;
            let payAmount = Math.round(userData.salary * (checkOutHour - checkInHour) / 126);
            checkOutData = await Attendance.update({
                checkOutTime: time,
                amount: payAmount,
                updatedBy: userData.username
            })
            res.status(200).json({ message: "Successfully checked out" })
        } else res.status(403).json({ message: "type field can only be 'Check In' or 'Check Out'" });
    } catch (err) {
        res.status(500), json(err);
    }
}

module.exports = { submitAttendance };