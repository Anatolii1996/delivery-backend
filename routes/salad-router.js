const express = require('express');
const {getSalads} = require("../controllers/salads-controller");


const router = express.Router();


router.get("/salads", getSalads);


module.exports = router;