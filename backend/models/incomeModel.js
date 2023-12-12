const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const incomeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    amount: {
      type: Number,
      required: true,
      maxLength: 20,
      trim: true,
    },
    type: {
      type: String,
      default: "income",
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
      maxLength: 50,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Income", incomeSchema);
