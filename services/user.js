const { User } = require('../db/models');

async function isAdmin(userId) {
    try {
        let userData = await User.findOne({ where: { id: userId } });
        return userData.role === "ADMIN";
    } catch (err) {
        throw err;
    }
}

async function getUser(userId) {
    try {
        let userData = await User.findOne({ where: { id: userId } });
        return userData;
    } catch (err) {
        throw err;
    }
}

module.exports = { isAdmin, getUser }