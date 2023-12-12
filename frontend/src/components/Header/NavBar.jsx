import React from "react";
// import { NavLink } from 'react-router-dom';
import DropdownButton from "../Button/DropdownButton";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const NavBar = () => {
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
        borderBottom: "solid 1px white",
      }}
    >
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
        {/* <NavLink
                    // to="/"
                    aria-label='Go to home!'
                > */}
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
            // marginLeft: "20px",
          }}
        >
          Budget Buddy
        </span>
        {/* </NavLink> */}
      </Menu>
      <DropdownButton />
    </Header>
  );
};

export default NavBar;
