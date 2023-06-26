const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ConversationTable = require("../models/conversaion");
const MessageTable = require("../models/messages");

const Conversation = async (req, res) => {
  const sId = req.body.senderId;
  const rId = req.body.reciverId;

  const convoexist = await ConversationTable.find({
    members: { $all: [sId, rId] },
  });
  console.log("convoexist");
  console.log(convoexist);
  if (convoexist.length === 0) {
    await ConversationTable.create({
      members: [sId, rId],
    }).then(console.log("Conversation created"));
    const convoexist = await ConversationTable.findOne({
      members: { $all: [sId, rId] },
    });

    res.json({ convoexist });
    return;
  }
  console.log("Conversation exists");
  res.json({ convoexist });
  return;
};



const StartConversation = async (req, res) => {
  console.log(req.body)
 
  await ConversationTable.findOneAndUpdate({_id:req.body.convoID},{msg:req.body.text});
  await MessageTable.create({
    convoId: req.body.convoID,
    rId:req.body.reciverId,
    sId:req.body.senderId,
    text:req.body.text
  }).then(console.log("message saved"));
  res.json("msg saved ******************************");

};

module.exports = { StartConversation,Conversation };
