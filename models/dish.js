const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    meal: {
        type: String,
        required: true
    },
 

});

const FirstDish = mongoose.model("Firstdish", dishSchema);
module.exports = FirstDish;