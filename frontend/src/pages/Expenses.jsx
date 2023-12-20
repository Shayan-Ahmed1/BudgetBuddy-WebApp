import React from "react";
import { createExpense, fetchData } from "../helper";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import ExpenseForm from "../components/Expense/ExpenseForm";
import ExpenseTable from "../components/Expense/ExpenseTable";

// loader
export function expenseLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets")
  const expenses = fetchData("expenses")
  return { userName, expenses, budgets };
}

//
export async function expenseAction({ request }) {
  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)
  console.log(values.newExpenseBudget);

  try {
    // throw new Error("Success")
    createExpense({ name: values.newExpense, amount: values.newExpenseAmount, budget: values.newExpenseBudget, date: values.newExpenseDate })
    return toast.success("Expense Created")
  } catch (error) {
    throw new Error("There was a problem creating your Expense")
  }
}

const Expense = () => {
  const { userName, expenses, budgets } = useLoaderData()

  return (
    <div className="flex-md" style={{ position: "relative", marginLeft: "200px" }}>
      <div style={{ marginTop: "15px" }}>
        <h1>Track your Expenses, <span style={{ color: "lightgray" }}>{userName}</span></h1>
        <ExpenseForm budgets={budgets} />
      </div>
      <div>
        <ExpenseTable expenses={expenses} />
      </div>

    </div>
  );
};

export default Expense;
