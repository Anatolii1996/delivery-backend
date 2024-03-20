const express = require('express');
const {createUser,loginUser, logout,refresh,activate, getUsers, checkUser} = require("../controllers/user-controller");


const router = express.Router();


router.post("/new-user", createUser);

router.post("/login", loginUser);
router.get("/checkToken", checkUser);
// router.post("/logout", logout);
router.get("/activate/:link", activate);
router.get("/refresh", refresh);
router.get("/users", getUsers);


module.exports = router;