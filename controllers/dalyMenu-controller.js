const DalyMenu = require("../models/menu");
const { handleError } = require("../helper")

const getDalyMeny = async (req, res) => {
    await DalyMenu
        .find()
        .then((menu) => {
            // console.log(menu)
            res.status(200)
                .json(menu)
        })
        .catch((err) => handleError(res, err));
};



module.exports = { getDalyMeny };