const User = require("../models/userModel");
const mongoose = require("mongoose");

//@desc Retrieve all users
//@route GET /api/users
//@access public
const getUsers = async (req, res) => {
    try {
        const users = await User.find({}).sort({ createdAt: -1 });
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ error: 'Server Error' })
    }
};

//@desc Create a User
//@route POST api/users
//@access public
const createUser = async (req, res) => {
    const { name, username, password } = req.body;

    if (!username || !password) {
        res.status(400);
        throw new Error("All fields are required!");
    }

    try {
        const user = await User.create({ name, username, password });
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

//@desc Retrieve a single user
//@route Get /api/users/:id
//@access public
const getUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such user record" });
    }

    const user = await User.findById(id);

    if (!user) {
        return res.status(404).json({ error: "No such user record" });
    }

    res.status(200).json(user);
};

//@desc Update an user
//@route PUT /api/user/:id
//@access public
const updateUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such user record" });
    }

    try {
        const user = await User.findByIdAndUpdate((id), { ...req.body }, { returnDocument: 'after' });

        if (!user) {
            return res.status(404).json({ error: "No such user record" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
};

//@desc Delete a user
//@route DELETE /api/user/:id
//@access public
const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such user record" });
    }

    try {
        const user = await User.findByIdAndDelete((id), { returnDocument: 'after' });

        if (!user) {
            return res.status(404).json({ error: "No such user record" });
        }

        res.status(200).json(user);
    } catch (error) {
        return res.status(404).json({ error: "No such user record" });
    }
};

module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
};
