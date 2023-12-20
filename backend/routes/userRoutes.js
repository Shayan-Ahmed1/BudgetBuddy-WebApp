const express = require("express");
const {
    registerUser,
    loginUser,
    currentUser,
} = require("../controllers/userController");

const router = express.Router();

// Register a User 
router.route("/register").post(registerUser);

// Login a User
router.route("/login").post(loginUser);

// Current User
router.route("/current").get(currentUser);

module.exports = router;
