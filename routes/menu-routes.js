const express = require('express');
const {getDalyMeny, updateDalyMeny} = require("../controllers/dalyMenu-controller");


const router = express.Router();


router.get("/menu", getDalyMeny);
router.patch("/change-dalyMenu", updateDalyMeny);


module.exports = router;