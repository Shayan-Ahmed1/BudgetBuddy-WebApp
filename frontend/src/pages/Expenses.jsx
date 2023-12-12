import React from "react";
import ExpenseForm from "../components/Expense/ExpenseForm";
import ExpenseList from "../components/Expense/ExpenseList";
// import ExpensesForm from "../components/Expense/ExpensesForm";

const Expenses = () => {
  return (
    <div
      style={{
        width: "60%",
        // position: "fixed",
        display: "flex",
        justifyContent: "space-around",
        // alignContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        {/* <ExpensesForm /> */}
        <ExpenseForm />
      </div>
      <div>
        <ExpenseList />
      </div>
    </div>
  );
};

export default Expenses;
