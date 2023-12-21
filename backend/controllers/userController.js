const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//@desc Register a User
//@route POST api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    res.status(400);
    throw new Error("All fields are required!");
  }

  const userAvailable = await User.findOne({ username });

  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  // Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password", hashedPassword);
  const user = await User.create({
    name,
    username,
    password: hashedPassword,
  });

  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, username: user.username });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.json({ message: "User Registered" });
});

//@desc Login User
//@route POST api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const user = await User.findOne({ username });
  // compare password with hashPassword
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Credentials are invalid");
  }
});

//@desc Current User Info
//@route GET api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
