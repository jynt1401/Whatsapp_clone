const express = require("express");
const router = express.Router();
const {UploadStatus} = require("../Controllers/Status");

router.post("/upload", UploadStatus);

module.exports = router;

