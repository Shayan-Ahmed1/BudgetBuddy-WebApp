import React from "react";
import { createIncome, fetchData } from "../helper";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import IncomeForm from "../components/Income/IncomeForm";
import IncomeTable from "../components/Income/IncomeTable";

// loader
export function incomeLoader() {
  const userName = fetchData("userName");
  const incomes = fetchData("incomes")
  return { userName, incomes };
}

//
export async function incomeAction({ request }) {
  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)

  try {
    // throw new Error("Success")
    createIncome({ name: values.newIncome, amount: values.newIncomeAmount, date: values.newIncomeDate })
    return toast.success("Income Created")
  } catch (error) {
    throw new Error("There was a problem creating your Income")
  }
}

const Income = () => {
  const { userName, incomes } = useLoaderData()

  return (
    <div className="flex-md" style={{ position: "relative", marginLeft: "200px" }} >
      <div style={{ marginTop: "15px" }}>
        <h1>Track your Income, <span style={{ color: "lightgray" }}>{userName}</span></h1>
        <IncomeForm />
      </div>
      <div>
        <IncomeTable incomes={incomes} />
      </div>
    </div>
  );
};

export default Income;
