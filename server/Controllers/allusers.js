const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");

const all = async (req, res) => {
  const user = await User.find({});
  
  console.log(user);
  res.json({user});
  return;
};

module.exports = { all };
