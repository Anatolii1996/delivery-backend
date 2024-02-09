const express = require('express');
const {getSecondDishes} = require("../controllers/secondDishes-controller");


const router = express.Router();


router.get("/second-dishes", getSecondDishes);


module.exports = router;