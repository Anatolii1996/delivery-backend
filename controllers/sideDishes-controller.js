const {SideDish} = require("../models/dish");
const { handleError } = require("../helper")

const getSideDishes = async (req, res) => {
    await SideDish
        .distinct("meal")
        .then((visits) => {
            res.status(200)
                .json(visits)
        })
        .catch((err) => handleError(res, err));
};



module.exports = { getSideDishes };