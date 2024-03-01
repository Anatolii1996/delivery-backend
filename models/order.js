const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    tel: String,
    address: String,
    price: Number,
    details: {
      Меню1: {
        count: Number,
        dishes:[String]
      },
      Меню2: {
        count: Number,
        dishes:[String],
      },
      Десерт: {
        count: Number,
        dishes:[String]
      }
    }
});

const Order = mongoose.model("Order", orderSchema);


module.exports = Order;
