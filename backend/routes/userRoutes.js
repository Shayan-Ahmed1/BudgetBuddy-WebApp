const express = require("express");
const {
    getUser,
    createUser,
    getUsers,
    updateUser,
    deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// Retrieve all User records
router.route("/").get(getUsers);

// Retrieve a single User record
router.route("/:id").get(getUser);

// Create a new User record
router.route("/").post(createUser);

// Update an existing User record
router.route("/:id").put(updateUser);

// Delete an existing User record
router.route("/:id").delete(deleteUser);

module.exports = router;
