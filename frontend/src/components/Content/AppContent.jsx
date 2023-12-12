import { Layout } from "antd";
// import IncomeForm from "../Income/IncomeForm";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

const AppContent = () => {
  return (
    <Content
      style={{
        display: "flex",
        justifyContent: "space-around",
        
        // alignContent: "center",
        // alignItems: "center",
        height: "100%",
        // minHeight: "200vh",
        scrollBehavior: "smooth",
        padding: 10,
      }}
    >
      {/* <IncomeForm /> */}
      <Outlet />
    </Content>
  );
};

export default AppContent;
