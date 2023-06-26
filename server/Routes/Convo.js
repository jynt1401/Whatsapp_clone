const express = require("express");
const router = express.Router();
const {
  Conversation,
  StartConversation,
} = require("../Controllers/Conversation");

router.post("/setconvo", Conversation);
router.post("/startconvo", StartConversation);

module.exports = router;
