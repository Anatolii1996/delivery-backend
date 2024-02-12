const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const menuSchema = new Schema({

    menu1: {
        firstDish: String,
        secondDish: String,
        sideDish: String,
        salad: String,
        bread: String
    },
    menu2: {
        mainDish: String,
        dessert: String
    },
    dessert: String,
    date: String,
    
});

const DalyMenu = mongoose.model("DalyMenu", menuSchema, "dalyMenu");

module.exports = DalyMenu;