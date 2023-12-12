const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

const db_connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGO_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error.message);
    console.log("Database Connection Error");
  }
};

module.exports = { db_connect };
