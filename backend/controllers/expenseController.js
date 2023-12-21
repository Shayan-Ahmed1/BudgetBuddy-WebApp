const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Expense = require("../models/expenseModel");

//@desc Retrieve all expenses
//@route GET /api/expenses
//@access private
const getExpenses = asyncHandler(async (req, res) => {
  try {
    const expenses = await Expense.find({ user_id: req.user.id }).sort({
      createdAt: -1,
    });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

//@desc Create a new expense
//@route POST /api/expenses
//access private
const createExpense = async (req, res) => {
  const { name, amount, date, category, description } = req.body;

  if (!name || !amount || !date || !category || !description) {
    res.status(400);
    throw new Error("All fields are required!");
  }

  if (amount <= 0 || !amount === "number") {
    return res.status(400).json({ error: "Amount must be a positive number" });
  }

  try {
    const expense = await Expense.create({
      name,
      amount,
      date,
      category,
      description,
      user_id: req.user.id,
    });
    res.status(200).json(expense);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//@desc Retrieve a single expense
//@route GET /api/expenses/:id
//@access private
const getExpense = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such expense" });
  }

  const expense = await Expense.findById(id);

  if (!expense) {
    res.status(404);
    throw new Error("Expense not found");
  }

  res.status(200).json(expense);
});

//@desc Update an existing expense
//@route PUT /api/expenses/:id
//@access private
const updateExpense = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such expense" });
  }

  const expense = await Expense.findById(id);

  if (!expense) {
    res.status(404);
    throw new Error("Expense not found");
  }

  if (expense.user_id.toString() !== req.user.id) {
    req.status(403);
    throw new Error("User don't have permission to update other user expenses");
  }

  const updatedExpense = await Expense.findByIdAndUpdate(
    id,
    { ...req.body },
    { returnDocument: "after" }
  );

  res.status(200).json(updatedExpense);
});

//@desc Delete an existing expense
//@route DELETE /api/expenses/:id
//@access private
const deleteExpense = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such expense" });
  }

  const expense = await Expense.findByIdAndDelete(id, {
    returnDocument: "after",
  });

  if (!expense) {
    res.status(404);
    throw new Error("Expense not found");
  }

  res.status(200).json(expense);
};

module.exports = {
  getExpenses,
  getExpense,
  createExpense,
  updateExpense,
  deleteExpense,
};
