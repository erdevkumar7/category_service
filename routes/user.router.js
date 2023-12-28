const express = require('express');
const { adminLogin } = require('../controllers/user.controller');
const router = express.Router();


router.post("/adminlogin",adminLogin);

module.exports = router