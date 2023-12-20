require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { db_connect } = require("./db/db_connect");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes")
const userRoutes = require("./routes/userRoutes")

const app = express();

const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/incomes", incomeRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/users", userRoutes);


// server
const server = () => {
  db_connect(); // DB Connection
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

server();
