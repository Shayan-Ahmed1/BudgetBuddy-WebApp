const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

// Register a User
router.route("/register").post(registerUser);

// Login a User
router.route("/login").post(loginUser);

// Current User
router.route("/current").get(validateToken, currentUser);

module.exports = router;
