const express = require('express');
const {getSideDishes} = require("../controllers/sideDishes-controller");


const router = express.Router();


router.get("/side-dishes", getSideDishes);


module.exports = router;