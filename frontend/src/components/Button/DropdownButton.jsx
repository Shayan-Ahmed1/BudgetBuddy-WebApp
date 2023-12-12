import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
const items = [
  {
    //     key: "1",
    //     primary: true,
    //     label: (
    //       <div
    //         style={{
    //           color: "black",
    //           fontSize: "16px",
    //           display: "flex",
    //           justifyContent: "center",
    //           // height: 35,
    //           // marginLeft: "5px"
    //         }}
    //       >
    //         {/* <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com"> */}
    //         User Profile
    //         {/* </a> */}
    //       </div>
    //     ),
    //     icon: (
    //       <div
    //         style={{
    //           color: "black",
    //           fontSize: "16px",
    //           display: "flex",
    //           // height: 35,
    //           // marginLeft: "5px"
    //         }}
    //       >
    //         <UserOutlined />
    //       </div>
    //     ),
    //   },
    //   {
    key: "1",
    label: (
      <div
        style={{
          // position: "relative",
          display: "flex",
          color: "white",
          fontSize: "16px",
          height: 35,
          justifyContent: "center",
          // marginLeft: "5px"
        }}
      >
        <Link to="/login">
          <Button
            style={{
              color: "white",
              fontSize: "16px",
              height: 35,
              // marginLeft: "5px"
            }}
            type="primary"
            className="ant-list-item"
          >
            Log Out
          </Button>
        </Link>
      </div>
    ),
  },
];

const DropdownButton = ({ userName }) => (
  <Dropdown
    menu={{
      items,
    }}
  >
    {/* <a onClick={(e) => e.preventDefault()}> */}
    <Space>
      <Button
        style={{
          position: "relative",
          display: "flex",
          color: "white",
          fontSize: "16px",
          height: 40,
          alignItems: "center",
        }}
        type="primary-white"
        className="ant-list-item"
      >
        Hi, {userName}
        <DownOutlined />
      </Button>
    </Space>
    {/* </a> */}
  </Dropdown>
);
export default DropdownButton;
