const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxLength: 20,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            maxLength: 20,
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
            required: true,
            maxLength: 20,
            trim: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
