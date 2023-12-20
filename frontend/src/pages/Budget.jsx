import React from "react";
import { createBudget, fetchData } from "../helper";
import { useLoaderData } from "react-router-dom";
import BudgetForm from "../components/Budget/BudgetForm";
import { toast } from "react-toastify";
import BudgetTable from "../components/Budget/BudgetTable";
import BudgetItem from "../components/Budget/BudgetItem";

// loader
export function budgetLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets")
  return { userName, budgets };
}

export async function budgetAction({ request }) {
  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)
  console.log(_action);

  try {
    // throw new Error("Success")
    createBudget({ name: values.newBudget, amount: values.newBudgetAmount, date: values.newBudgetDate })
    return toast.success("Budget Created")
  } catch (error) {
    throw new Error("There was a problem creating your budget")
  }
}

const Budget = () => {
  const { userName, budgets } = useLoaderData()
  return (
    <div style={{ maxHeight: "200vh" }}>
      {
        budgets && budgets.length > 0 ?
          (
            <div className="grid-md">
              <div className="flex-md" style={{ position: "relative", marginLeft: "200px" }} >
                <div style={{ marginTop: "15px" }}>
                  <h1>Track your Budgets, <span style={{ color: "lightgray" }}>{userName}</span></h1>
                  <BudgetForm />
                </div>
                <div>
                  <BudgetTable budgets={budgets} />
                </div>
              </div>
              <div style={{ color: "whitesmoke", marginLeft: "200px", marginTop: "15px" }}>
                <h2 style={{ margin: "25px" }}>Existing Budgets</h2>
                <div className="budgets">
                  {
                    budgets.map((budget) => (
                      <BudgetItem key={budget.key} budget={budget} />))
                  }
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-md" >
              <div style={{ marginTop: "15px" }}>
                <h1>Track your Budgets, <span style={{ color: "lightgray" }}>{userName}</span></h1>
                <BudgetForm />
              </div>
              <div style={{ color: "lightgray", marginTop: "275px" }}>
                <h2> Created you first budget</h2>
              </div>
            </div>
          )
      }
    </div >


  );
};

export default Budget;
