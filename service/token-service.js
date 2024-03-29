const jwt = require('jsonwebtoken');
const Token = require("../models/token-model")

const generateTokens = (payload) => {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS, { expiresIn: "30m" })
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH, { expiresIn: "30d" })
    return {
        accessToken,
        refreshToken
    }
};

const saveToken = async (userId, refreshToken) => {
    const tokenData = await Token.findOne({ user: userId })
    if (tokenData) {
        tokenData.refreshToken = refreshToken;
        return tokenData.save();
    }
    const token = await Token.create({ user: userId, refreshToken })
    return token;
}

module.exports = { generateTokens, saveToken }