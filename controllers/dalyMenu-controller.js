const DalyMenu = require("../models/menu");
const { handleError } = require("../helper");
const moment = require('moment');

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

const updateDalyMeny = async (req, res) => {
    try {
        const updatedMenu = await DalyMenu.findOneAndUpdate({},
            {
                $set: {
                    "menu1.firstDish": req.body.firstDish,
                    "menu1.secondDish": req.body.secondDish,
                    "menu1.sideDish": req.body.sideDish,
                    "menu1.salad": req.body.salad,
                    "menu2.mainDish": req.body.mainDish,
                    "menu2.dessert": req.body.dessert,
                    "dessert": req.body.bigDessert,
                    "date": moment().add(120, 'minutes').format("DD.MM.YYYY")
                }
            },
            { new: true });
            res.status(200).json(updatedMenu);
    }catch (err) {
        handleError(res, err)
    }

    // await DalyMenu
    //     .find()
    //     .then((menu) => {
    //         // console.log(menu)
    //         res.status(200)
    //             .json(menu)
    //     })
    //     .catch((err) => handleError(res, err));
};



module.exports = { getDalyMeny, updateDalyMeny };