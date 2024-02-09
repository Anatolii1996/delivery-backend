const {SecondDish} = require("../models/dish");
const { handleError } = require("../helper")

const getSecondDishes = async (req, res) => {
    await SecondDish
        .distinct("meal")
        .then((visits) => {
            res.status(200)
                .json(visits)
        })
        .catch((err) => handleError(res, err));
};



module.exports = { getSecondDishes };