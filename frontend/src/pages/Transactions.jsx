import React from "react";
import TransactionList from "../components/Transactions/TransactionList";
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helper";

// loader
export function transactionLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets")
  const expenses = fetchData("expenses")
  return { userName, expenses, budgets };
}

const Transactions = () => {
  const { expenses } = useLoaderData()
  return (
    <div style={{ marginLeft: "150px" }}>
      <h2>Transactions</h2>
      <TransactionList expenses={expenses} />
    </div>
  );
};

export default Transactions;
