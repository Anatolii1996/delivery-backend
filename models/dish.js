const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    meal: {
        type: String,
        required: true
    },
 

});

const FirstDish = mongoose.model("Firstdish", dishSchema, "firstDishes");
const SecondDish = mongoose.model("Seconddish", dishSchema, "secondDishes");
module.exports = {FirstDish, SecondDish};