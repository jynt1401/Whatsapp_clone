const express = require("express");
const router = express.Router();
const {
  Conversation,
  StartConversation,
  Chats
} = require("../Controllers/Conversation");

router.post("/setconvo", Conversation);
router.post("/startconvo", StartConversation);
router.post("/chats", Chats);

module.exports = router;
