const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");

const authlogin = async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    console.log("User found");
    res.json({ userexist: true, msg: "login without ceating account" });
    return;
  }
  await User.create({
    name: req.body.name,
    first_name: req.body.given_name,
    last_name: req.body.family_name,
    email: req.body.email,
    profile: req.body.picture,
  }).then(console.log("user created"));
  res.json({ userexist: false, msg: "login with ceating account" });
  return;
};

module.exports = { authlogin };
