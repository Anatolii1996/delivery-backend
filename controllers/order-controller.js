const Order = require("../models/order");
const moment = require("moment");
const { handleError } = require("../helper")

const removeDepricatedOrder = async () => {
    try {
        const currentDate = moment().add(120, 'minutes').format("DD.MM.YYYY");

        await Order.deleteMany({ date: { $lt: currentDate } });

        // console.log("Устаревшие заказы успешно удалены.");
    } catch (err) {
        handleError(res, err);
    }
};
const setOrder = async (req, res) => {
    // console.log(req.body)
    removeDepricatedOrder()

    const order = new Order(req.body);
    // // console.log(visit)
    await order
        .save()
        .then((result) => {
            // console.log(result)
            res
                .status(201)
                .json(result)

        })
        .catch((err) => handleError(res, err));
};



module.exports = { setOrder };