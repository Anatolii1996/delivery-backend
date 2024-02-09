const express = require('express');
const {getDalyMeny} = require("../controllers/dalyMenu-controller");


const router = express.Router();


router.get("/menu", getDalyMeny);


module.exports = router;