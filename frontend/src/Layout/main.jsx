// RRD imports
import { Outlet, useLoaderData } from "react-router-dom";
// components
import AppSider from "../components/SideBar/AppSider";
import AppHeader from "../components/Header/AppHeader";
import "../styles/App.css";
// helper functions
import { fetchData } from "../helper";
// antd imports
import { Layout } from "antd";
const { Content } = Layout;

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <Layout>
      <AppHeader userName={userName} />
      <Layout
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 60,
          left: 0,
        }}
      >
        <AppSider userName={userName} />
        <Layout
          style={{
            position: "relative",
            // background: "hsl(183 74% 44%)",
            backgroundColor: "#0071BC",
            minHeight: "250vh",
            // height: "100%",
          }}
        >
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
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Main;
