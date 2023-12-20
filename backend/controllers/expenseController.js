const mongoose = require('mongoose')
const Expense = require('../models/expenseModel')

//@desc Retrieve all expenses
//@route GET /api/expenses
//@access public
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({}).sort({ createdAt: -1 })
        res.status(200).json(expenses)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

//@desc Retrieve a single expense record
//@route GET /api/expenses/:id
//@access public
const getExpense = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'No such expense' })
    }

    try {
        const expense = await Expense.findById(id)
        if (!expense) {
            return res.status(404).json({ message: 'No such expense' })
        }
        res.status(200).json(expense)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }

}

//@desc Create a new expense
//@route POST /api/expenses
//access public
const createExpense = async (req, res) => {
    const { name, amount, date, category, description } = req.body

    if (!name || !amount || !date || !category || !description) {
        return res.status(404).json({ message: 'All fields are required!' })
    }

    if (amount <= 0 || !amount === "number") {
        return res.status(404).json({ error: "Amount must be a positive number" });
    }

    try {
        const expense = await Expense.create({ name, amount, date, category, description })
        res.status(200).json(expense)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

//@desc Update an existing expense
//@route PUT /api/expenses/:id
//@access public
const updateExpense = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'No such expense' })
    }

    try {
        const expense = await Expense.findByIdAndUpdate(id, { ...req.body }, { returnDocument: 'after' })
        if (!expense) {
            return res.status(404).json({ error: "No such income record" });
        }
        res.status(200).json(expense)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

//@desc Delete an existing expense
//@route DELETE /api/expenses/:id
//@access public
const deleteExpense = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'No such expense' })
    }

    try {
        const expense = await Expense.findByIdAndDelete((id), { returnDocument: 'after' })

        if (!expense) {
            return res.status(404).json({ message: 'No such expense' })
        }
        res.status(200).json(expense)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    getExpenses,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense
}