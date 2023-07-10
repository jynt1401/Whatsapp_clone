const express = require("express");
const router = express.Router();
const {UploadStatus} = require("../Controllers/Status");
const {GetStatus} = require("../Controllers/Status");

router.post("/upload", UploadStatus);
router.post("/get", GetStatus);

module.exports = router;

