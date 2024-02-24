const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const menuSchema = new Schema({

    menu1: {
        firstDish: {
            meal: String,
            image: String
        },
        secondDish: {
            meal: String,
            image: String
        },
        sideDish: {
            meal: String,
            image: String
        },
        salad: {
            meal: String,
            image: String
        },
        bread: {
            meal: String,
            image: String
        }
    },
    menu2: {
        mainDish: {
            meal: String,
            image: String
        },
        dessert: {
            meal: String,
            image: String
        }
    },
    bigDessert: {
        nameDessert: {
            meal: String,
            image: String
        }

    },
    date: String,

});

const DalyMenu = mongoose.model("DalyMenu", menuSchema, "dalyMenu");

module.exports = DalyMenu;