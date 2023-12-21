const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      maxLength: 20,
      required: [true, "Please add your name"],
    },
    username: {
      type: String,
      lowercase: true,
      trim: true,
      maxLength: 20,
      required: [true, "Please add the user name"],
      unique: [true, "Username already taken"],
      validate: {
        validator: function (value) {
          // Check if the username contains spaces
          return !/\s/.test(value);
        },
        message: "Username cannot contain spaces.",
      },
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
