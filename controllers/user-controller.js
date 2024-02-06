const User = require("../models/user");
const { handleError } = require("../helper")

const createUser = async (req, res) => {
    console.log(req.body)
    const user = new User(req.body);
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



module.exports = { createUser };