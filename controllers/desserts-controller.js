const {Dessert} = require("../models/dish");
const { handleError } = require("../helper")

const getDesserts = async (req, res) => {
    await Dessert
        .distinct("meal")
        .then((visits) => {
            res.status(200)
                .json(visits)
        })
        .catch((err) => handleError(res, err));
};



module.exports = { getDesserts };