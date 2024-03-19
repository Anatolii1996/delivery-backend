// const User = require("../models/user");
const { handleError } = require("../helper");
const { registration, login } = require("../service/user-service");

const createUser = async (req, res) => {
    // console.log(req.body)
    try {
        const userData = await registration(req.body);
        // console.log(userData)
        res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: "None" });
        return res
            .status(201)
            .json(userData)
    } catch (err) {
        handleError(res, err);
    }

};

const loginUser = async (req, res, next) => {
    // console.log(req.body)
    try {
        const { email, password } = req.body;
        const userData = await login(email, password)
        res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: "None" });
        return res
            .status(201)
            .json(userData)
    } catch (err) {

    }

};

const logout = async (req, res, next) => {
    // console.log(req.body)
    try {

    } catch (err) {

    }

};

const activate = async (req, res, next) => {
    // console.log(req.body)
    try {

    } catch (err) {

    }

};
const refresh = async (req, res, next) => {
    // console.log(req.body)
    try {

    } catch (err) {

    }

};
const getUsers = async (req, res, next) => {
    // console.log(req.body)
    try {
        res.json(["123", "456"])
    } catch (err) {

    }

};



module.exports = { createUser, loginUser, logout, activate, refresh, getUsers };