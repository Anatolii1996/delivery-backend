const mongoose = require("mongoose");
const moment = require('moment');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true
    },
    orderTime: {
        type: Date,
        default: () => moment().add(120, 'minutes').toDate()
    },
    isActivated:{
        type: Boolean,
        default: false
    },
    activationLink:String

});

const User = mongoose.model("User", userSchema);
module.exports = User;