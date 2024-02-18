const {FirstDish, SecondDish, SideDish, Salad , Dessert } = require("../models/dish")

const uploadImage = async (req, res) => {
    const { name, base64 } = req.body;
    console.log(name)
    // console.log(base64)
    try {
        Dessert
        .create({
            meal: name,
            image: base64
        })
        res.send({ status: "ok" })
    } catch (err) {
        res.send({ status: "error",data: err })
     }
}

module.exports = { uploadImage };