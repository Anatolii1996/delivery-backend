const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    meal: {
        type: String,
        required: true
    },
 

});

const FirstDish = mongoose.model("FirstDish", dishSchema, "firstDishes");
const SecondDish = mongoose.model("SecondDish", dishSchema, "secondDishes");
const SideDish = mongoose.model("SideDish", dishSchema, "sideDishes");
const Salad = mongoose.model("Salad", dishSchema);


module.exports = {FirstDish, SecondDish, SideDish, Salad};