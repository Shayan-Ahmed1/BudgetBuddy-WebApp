// RRD Imports
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layout
import Main, { mainLoader } from "./Layout/main";

// Actions
import { logoutAction } from "./actions/logout";

// Main Pages
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Budget, { budgetAction, budgetLoader } from "./pages/Budget";
import Income, { incomeAction, incomeLoader } from "./pages/Income";
import Expenses, { expenseAction, expenseLoader } from "./pages/Expenses";
import Transactions, { transactionLoader } from "./pages/Transactions";
import Error from "./pages/Error";
import LoginPage from "./pages/loginPage";
import Home, { homeAction } from "./pages/Home";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "budget",
        element: <Budget />,
        loader: budgetLoader,
        action: budgetAction,
      },
      {
        path: "income",
        element: <Income />,
        loader: incomeLoader,
        action: incomeAction,
      },
      {
        path: "expenses",
        element: <Expenses />,
        loader: expenseLoader,
        action: expenseAction,
      },
      {
        path: "transactions",
        element: <Transactions />,
        loader: transactionLoader,
      },
      {
        path: "home",
        element: <Home />,
        action: homeAction,
        // action: loginPageAction,
        errorElement: <Error />,
      },
      {
        path: "signup",
        element: <SignUp />,
        // action: logoutAction,
        // action: loginPageAction,
      },
      {
        path: "login",
        element: <LoginPage />,
        action: logoutAction,
        // action: loginPageAction,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />;
      <ToastContainer />
    </div>
  );
};

export default App;
