const express = require('express');
const {getDesserts} = require("../controllers/desserts-controller");


const router = express.Router();


router.get("/desserts", getDesserts);


module.exports = router;