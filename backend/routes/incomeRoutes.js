const express = require("express");
const {
  getIncome,
  createIncome,
  getIncomes,
  updateIncome,
  deleteIncome,
} = require("../controllers/incomeController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.use(validateToken);

// Retrieve all income records
router.route("/").get(getIncomes);

// Retrieve a single income record
router.route("/:id").get(getIncome);

// Create a new income record
router.route("/").post(createIncome);

// Update an existing income record
router.route("/:id").put(updateIncome);

// Delete an existing income record
router.route("/:id").delete(deleteIncome);

module.exports = router;
