const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");

const authlogin = async (req, res) => {
 
  
};

module.exports = { authlogin };
