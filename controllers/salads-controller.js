const {Salad} = require("../models/dish");
const { handleError } = require("../helper")

const getSalads = async (req, res) => {
    await Salad
        .distinct("meal")
        .then((visits) => {
            res.status(200)
                .json(visits)
        })
        .catch((err) => handleError(res, err));
};



module.exports = { getSalads };