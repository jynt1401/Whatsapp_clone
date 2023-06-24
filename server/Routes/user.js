const express = require("express");
const router = express.Router();
const {all} = require("../Controllers/allusers");

router.post("/all", all);

module.exports = router;