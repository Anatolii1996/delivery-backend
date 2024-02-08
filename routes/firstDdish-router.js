const express = require('express');
const {getFirstDishes} = require("../controllers/firstDishes-controller");


const router = express.Router();


router.get("/first-dishes", getFirstDishes);


module.exports = router;