var jwt = require("jsonwebtoken");
require('dotenv').config();

exports.adminLogin = async (req, res) => {
  try {
    const token = jwt.sign({ email: process.env.EMAIL }, process.env.SECRET);
    res.status(200).json({logintoken:token});
  } catch (err) {
    console.log(err);
  }
};