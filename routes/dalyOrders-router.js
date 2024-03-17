const express = require('express');
const {getDalyOrders} = require("../controllers/dalyOrders-controller");


const router = express.Router();


router.get("/dalyOrders", getDalyOrders);


module.exports = router;