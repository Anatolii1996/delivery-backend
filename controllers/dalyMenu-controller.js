const DalyMenu = require("../models/menu");
const { FirstDish, SecondDish, SideDish, Salad, Dessert } = require("../models/dish");
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
        const firstDish = req.body.firstDish
        const secondDish = req.body.secondDish
        const sideDish = req.body.sideDish
        const salad = req.body.salad
        const mainDish = req.body.mainDish
        const dessert = req.body.dessert
        const bigDessert = req.body.bigDessert

        const firstDaly = await FirstDish.findOne({ meal: firstDish })

        // console.log(firstDaly)
        const secondDaly = await SecondDish.findOne({ meal: secondDish })
        const sideDaly = await SideDish.findOne({ meal: sideDish })
        const saladDaly = await Salad.findOne({ meal: salad })
        const mainDaly = await SecondDish.findOne({ meal: mainDish })
        const dessertDaly = await Dessert.findOne({ meal: dessert })
        const bigDessertDaly = await Dessert.findOne({ meal: bigDessert })

        const updatedMenu = await DalyMenu.findOneAndUpdate({},
            {
                $set: {
                    "menu1.firstDish.meal": firstDish,
                    "menu1.firstDish.image": firstDaly.image,

                    "menu1.secondDish.meal": secondDish,
                    "menu1.secondDish.image": secondDaly.image,

                    "menu1.sideDish.meal": sideDish,
                    "menu1.sideDish.image": sideDaly.image,

                    "menu1.salad.meal": salad,
                    "menu1.salad.image": saladDaly.image,

                    "menu2.mainDish.meal": mainDish,
                    "menu2.mainDish.image": mainDaly.image,

                    "menu2.dessert.meal": dessert,
                    "menu2.dessert.image": dessertDaly.image,

                    "bigDessert.meal": bigDessert,
                    "bigDessert.image": bigDessertDaly.image,

                    "date": moment().add(120, 'minutes').format("DD.MM.YYYY")
                }
            },
            { new: true });
        res.status(200).json(updatedMenu);
    } catch (err) {
        handleError(res, err)
    }


};



module.exports = { getDalyMeny, updateDalyMeny };