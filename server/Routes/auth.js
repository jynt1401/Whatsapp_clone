const express = require("express");
const router = express.Router();
const {authlogin} = require("../Controllers/auth");

router.post("/auth", authlogin);

module.exports = router;