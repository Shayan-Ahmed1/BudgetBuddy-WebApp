import React, { useState } from "react";
// RRD imports
import { Link } from "react-router-dom";
// antd imports
import {
  DesktopOutlined,
  WalletFilled,
  PieChartFilled,
  DollarCircleFilled,
  CreditCardFilled,
  // SmileOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

const AppSider = ({ userName }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <nav>
      {
        userName && (
          <Sider
            style={{
              position: "fixed",
              zIndex: 1,
              padding: "30px 0px 0px 0px",
              height: "100%",
            }}
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <Menu theme="dark" defaultSelectedKeys={["dashboard"]} mode="inline">
              <Menu.Item key="dashboard" icon={<DesktopOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="income" icon={<WalletFilled />}>
                <Link to="/income">Income</Link>
              </Menu.Item>
              <Menu.Item key="budget" icon={<PieChartFilled />}>
                <Link to="/budget">Budget</Link>
              </Menu.Item>
              <Menu.Item key="expenses" icon={<DollarCircleFilled />}>
                <Link to="/expenses">Expenses</Link>
              </Menu.Item>
              <Menu.Item key="transactions" icon={<CreditCardFilled />}>
                <Link to="/transactions">Transactions</Link>
              </Menu.Item>
            </Menu>
          </Sider>
        )
      }
    </nav>
  );
};

export default AppSider;
