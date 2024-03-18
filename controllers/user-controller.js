// const User = require("../models/user");
const { handleError } = require("../helper");
const { registration } = require("../service/user-service");

const createUser = async (req, res) => {
    // console.log(req.body)
    try {
        const userData = await registration(req.body);
        res.cookie("refreshToken", userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});
        return res
            .status(201)
            .json(userData)
    } catch (err) {
        handleError(res, err);
    }

};

const login = async (req, res, next) => {
    // console.log(req.body)
    try {

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



module.exports = { createUser, login, logout, activate, refresh, getUsers };