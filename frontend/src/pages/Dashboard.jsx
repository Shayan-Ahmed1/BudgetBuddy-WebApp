// helper functions
import { Link, useLoaderData } from "react-router-dom";
import { fetchData } from "../helper";
import { toast } from "react-toastify";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const incomes = fetchData("incomes");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");

  return { userName, incomes, budgets, expenses };
}

export async function dashboardAction({ request }) {
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  try {
    // throw new Error("Ya done")
    localStorage.setItem("userName", JSON.stringify(formData.userName))
    localStorage.setItem("password", JSON.stringify(formData.password))
    console.log(data.get("userName"));
    return toast.success(`Welcome, ${formData.userName}`)
  } catch (e) {
    throw new Error("There was a problem creating your acount")
  }
}

const Dashboard = () => {
  const { userName, incomes, budgets, expenses } = useLoaderData();
  let totalIncomeAmount = 0
  incomes.map((income) => {
    return totalIncomeAmount = totalIncomeAmount + income.amount
  })

  let totalBudgetAmount = 0
  budgets.map((budget) => {
    return totalBudgetAmount = totalBudgetAmount + budget.amount
  })

  let totalExpenseAmount = 0
  expenses.map((expense) => {
    return totalExpenseAmount = totalExpenseAmount + expense.amount
  })

  const boxStyle = {
    display: "grid",
    width: "100%",
    border: "1px solid white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    color: "lightblue"
  }

  return (
    <div>
      <h1 style={{ marginTop: "25px", color: "lightgray", marginLeft: "50px" }}>
        Welcome Back, {userName}
      </h1>
      <div className="flex-md" style={{ marginTop: "100px", gap: "20px", marginLeft: "50px"}} >
        <Link to="/income">
          <div style={boxStyle} className="box">
            <h3 >Total Income Amount</h3>
            <h2>{totalIncomeAmount} rs</h2>
          </div>
        </Link>
        <Link to="/budget">
          <div style={boxStyle} className="box">
            <h3>Total Budget Amount</h3>
            <h2>{totalBudgetAmount} rs</h2>
          </div>
        </Link>
        <Link to="/expense">
          <div style={boxStyle} className="box">
            <h3>Total Expense Amount</h3>
            <h2>{totalExpenseAmount} rs</h2>
          </div>
        </Link>
        <Link to="/savings">
          <div style={boxStyle} className="box">
            <h3>Total Savings Currently</h3>
            <h2>{totalIncomeAmount - totalExpenseAmount} rs</h2>
          </div>
        </Link>
      </div >
    </div >
  );
};

export default Dashboard;
