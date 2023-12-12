import React from "react";
// import { NavLink } from 'react-router-dom';
import DropdownButton from "../Button/DropdownButton";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

const AppHeader = ({ userName }) => {
  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        // borderBottom: "solid 1px white",
      }}
    >
      <Link to="/">
        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            fontSize: "30px",
            fontFamily: "calibre",
            marginLeft: "20px",
          }}
          // className="ant-list-item"
        >
          <img
            src={"https://cdn-icons-png.flaticon.com/128/10149/10149443.png"}
            className="flex items-center"
            alt="Logo"
            width="55px"
            height="45px"
            style={{
              margin: "7px",
            }}
          />
          <span
            style={{
              fontSize: "25px",
              fontFamily: "calibre",
            }}
          >
            Budget Buddy
          </span>
        </Menu>
      </Link>
      <DropdownButton userName={userName} />
    </Header>
  );
};

export default AppHeader;
