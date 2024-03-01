const express = require('express');
const {setOrder} = require("../controllers/order-controller");


const router = express.Router();


// router.get("/desserts", getDesserts);
router.post("/new-order", setOrder);


module.exports = router;