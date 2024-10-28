// routes/authRouter.js
const express = require('express');
const router = express.Router();

const authContoller = require('../controllers/authController');

// Signup Route
router.post('/signup', authContoller.signup);

// Login Route
router.post('/login', authContoller.signin);

module.exports = router;
