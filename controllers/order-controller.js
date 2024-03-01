const Order = require("../models/order");
const { handleError } = require("../helper")

const setOrder = async (req, res) => {
    // console.log(req.body)
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