const asyncHandler = require("express-async-handler");
const Income = require("../models/incomeModel");
const mongoose = require("mongoose");

//@desc Retrieve all incomes
//@route GET /api/incomes
//@access private
const getIncomes = asyncHandler(async (req, res) => {
  const incomes = await Income.find({ user_id: req.user.id }).sort({
    createdAt: -1,
  });
  res.status(200).json(incomes);
});

//@desc Create an income
//@route POST api/incomes
//@access private
const createIncome = asyncHandler(async (req, res) => {
  const { name, amount, date, category, description } = req.body;

  if (!name || !amount || !date || !category || !description) {
    res.status(400);
    throw new Error("All fields are required!");
  }

  if (amount <= 0 || !amount === "number") {
    return res.status(400).json({ error: "Amount must be a positive number" });
  }

  try {
    const income = await Income.create({
      name,
      amount,
      date,
      category,
      description,
      user_id: req.user.id,
    });
    res.status(200).json(income);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

//@desc Retrieve a single income
//@route Get /api/incomes/:id
//@access private
const getIncome = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such income record" });
  }

  const income = await Income.findById(id);

  if (!income) {
    res.status(404);
    throw new Error("Income not found");
  }

  res.status(200).json(income);
});

//@desc Update an income
//@route PUT /api/incomes/:id
//@access private
const updateIncome = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such income record" });
  }

  const income = await Income.findById(id);

  if (!income) {
    res.status(404);
    throw new Error("Income not found");
  }

  if (income.user_id.toString() !== req.user.id) {
    req.status(403);
    throw new Error("User don't have permission to update other user incomes");
  }

  const updatedIncome = await Income.findByIdAndUpdate(
    id,
    { ...req.body },
    { returnDocument: "after" }
  );

  res.status(200).json(updatedIncome);
});

//@desc Delete an income
//@route DELETE /api/incomes/:id
//@access private
const deleteIncome = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such income record" });
  }

  const income = await Income.findByIdAndDelete(id, {
    returnDocument: "after",
  });

  if (!income) {
    res.status(404);
    throw new Error("Income not found");
  }

  res.status(200).json(income);
});

module.exports = {
  getIncomes,
  createIncome,
  getIncome,
  updateIncome,
  deleteIncome,
};
