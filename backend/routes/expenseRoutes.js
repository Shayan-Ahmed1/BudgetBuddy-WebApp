const express = require('express')
const {
    getExpenses,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense
} = require('../controllers/expenseController')

const router = express.Router()

// Retrieve all expenses
router.route('/').get(getExpenses)

// Retrieve a single expense record
router.route('/:id').get(getExpense)

// Create a new expense
router.route('/').post(createExpense)

// Update an existing expense
router.route('/:id').put(updateExpense)

// Delete an existing expense
router.route('/:id').delete(deleteExpense)

module.exports = router