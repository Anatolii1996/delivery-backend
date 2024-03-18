const express = require('express');
const {createUser,login, logout,refresh,activate, getUsers} = require("../controllers/user-controller");


const router = express.Router();


router.post("/new-user", createUser);

router.post("/login", login);
router.post("/logout", logout);
router.get("/activate/:link", activate);
router.get("/refresh", refresh);
router.get("/users", getUsers);


module.exports = router;