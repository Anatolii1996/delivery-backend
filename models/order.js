const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  tel: String,
  address: String,
  price: Number,
  date: {
    type: String,
    default: moment().add(120, 'minutes').format("DD.MM.YYYY")
  },
  details: {
    Меню1: {
      count: Number,
      dishes: [String]
    },
    Меню2: {
      count: Number,
      dishes: [String],
    },
    Десерт: {
      count: Number,
      dishes: [String]
    }
  }
});

const Order = mongoose.model("Order", orderSchema);


module.exports = Order;
