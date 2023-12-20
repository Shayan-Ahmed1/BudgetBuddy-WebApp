const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


//@desc Register User
//@route POST api/users/register
//@access public
const registerUser = async (req, res) => {
    const { name, username, password } = req.body;

    if (!name || !username || !password) {
        res.status(400);
        throw new Error("All fields are required!");
    }

    try {
        const userAvailable = await User.findOne({ username });
        if (userAvailable) {
            res.status(400);
            throw new Error("User already registered!");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password", hashedPassword);
        const user = await User.create({
            name,
            username,
            password: hashedPassword,
        });
        console.log(`User created ${user}`);
        if (user) {
            res.status(201).json({ _id: user.id, username: user.username })
        } else {
            res.status(404);
            throw new Error("User data is not valid")
        }
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

//@desc Login User
//@route POST api/users/login
//@access public
const loginUser = async (req, res) => {
    res.json({ message: "login user" });
}

//@desc Current User Info
//@route GET api/users/current
//@access public
const currentUser = async (req, res) => {
    res.json({ message: "Current user" });
}

module.exports = {
    registerUser,
    loginUser,
    currentUser,
}

