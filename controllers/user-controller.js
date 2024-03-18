const User = require("../models/user");
const { handleError } = require("../helper")
const bcrypt = require("bcrypt");
const uuid = require("uuid")

const createUser = async (req, res) => {
    console.log(req.body)
    const candidate = await User.findOne({ email: req.body.email });
    if (candidate) {
        throw new Error("Користувач з такою адресою вже зарєестрований")
    }
    const hashPassword = await bcrypt.hash(req.body.password, 3);
    const activationLink = uuid.v4()
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        tel: req.body.tel,
        address: req.body.address,
        activationLink: activationLink
    });
    // console.log(visit)
    await user
        .save()
        .then((result) => {
            // console.log(result)
            res
                .status(201)
                .json(result)


        })
        .catch((err) => handleError(res, err));
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