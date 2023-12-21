const Income = require("../models/incomeModel");
const mongoose = require("mongoose");

//@desc Retrieve all incomes
//@route GET /api/incomes
//@access private
const getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find({ user_id: req.user.id }).sort({
      createdAt: -1,
    });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(404).json({ error: "Server Error" });
  }
};

//@desc Create an income
//@route POST api/incomes
//@access private
const createIncome = async (req, res) => {
  const { name, amount, category, description, date } = req.body;

  if (!name || !amount || !category || !description || !date) {
    res.status(400);
    throw new Error("All fields are required!");
  }

  if (amount <= 0 || !amount === "number") {
    return res.status(404).json({ error: "Amount must be a positive number" });
  }

  try {
    const income = await Income.create({
      name,
      amount,
      category,
      description,
      date,
      user_id: req.user.id,
    });
    res.status(200).json(income);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//@desc Retrieve a single income
//@route Get /api/incomes/:id
//@access private
const getIncome = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such income record" });
  }

  const income = await Income.findById(id);

  if (!income) {
    return res.status(404).json({ error: "No such income record" });
  }

  res.status(200).json(income);
};

//@desc Update an income
//@route PUT /api/income/:id
//@access private
const updateIncome = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such income record" });
  }

  const income = await Income.findById(id);

  if (!income) {
    return res.status(404).json({ error: "No such income record" });
  }

  if (income.user_id.toString() !== req.user.id) {
    req.status(403).json({
      message: "User don't have permission to update other user incomes",
    });
    throw new Error("User don't have permission to update other user incomes");
  }

  try {
    const income = await Income.findByIdAndUpdate(
      id,
      { ...req.body },
      { returnDocument: "after" }
    );

    res.status(200).json(income);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//@desc Delete an income
//@route DELETE an /api/income/:id
//@access private
const deleteIncome = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such income record" });
  }

  const income = await Income.findById(id);

  if (!income) {
    return res.status(404).json({ error: "No such income record" });
  }

  if (income.user_id.toString() !== req.user.id) {
    req.status(403).json({
      message: "User don't have permission to update other user incomes",
    });
    throw new Error("User don't have permission to update other user incomes");
  }

  try {
    const income = await Income.findByIdAndDelete(id, {
      returnDocument: "after",
    });

    res.status(200).json(income);
  } catch (error) {
    return res.status(404).json({ error: "No such income record" });
  }
};

module.exports = {
  getIncomes,
  createIncome,
  getIncome,
  updateIncome,
  deleteIncome,
};
