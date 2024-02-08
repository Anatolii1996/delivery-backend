const FirstDish = require("../models/dish");
const { handleError } = require("../helper")

const getFirstDishes = async (req, res) => {
    await FirstDish
        .distinct("meal")
        .then((visits) => {
            res.status(200)
                .json(visits)
        })
        .catch((err) => handleError(res, err));
};



module.exports = { getFirstDishes };