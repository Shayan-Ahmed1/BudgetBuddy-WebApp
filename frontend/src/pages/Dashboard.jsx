// helper functions
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helper";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const password = fetchData("password");
  return { userName, password };
}

const Dashboard = () => {
  const { userName, password } = useLoaderData();

  return (
    <div>
      <h1>
        {userName} : {password}
      </h1>
      <h2>Dashboard</h2>
    </div>
  );
};

export default Dashboard;
