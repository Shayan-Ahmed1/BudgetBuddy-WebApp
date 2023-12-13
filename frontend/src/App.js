// RRD Imports
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Layout
import Main, { mainLoader } from "./Layout/main";

// Main Pages
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Budget from "./pages/Budget";
import Income from "./pages/Income";
import Expenses from "./pages/Expenses";
import Login from "./pages/Login";
import Transactions from "./pages/Transactions";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
      },
      {
        path: "budget",
        element: <Budget />,
      },
      {
        path: "income",
        element: <Income />,
      },
      {
        path: "expenses",
        element: <Expenses />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
