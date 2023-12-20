// RRD imports
import { Form } from "react-router-dom";

// antd imports
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";

const items = [
  {
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
        <Form method="post" action="/login">
          <button
            style={{
              padding: "8px 16px",
              fontSize: "16px",
              cursor: "pointer",
              border: "1px solid #1890ff",
              color: "white",
              backgroundColor: "#1890ff",
              borderRadius: "4px",
              // transition: background - color 0.3s, color 0.3s, border- color 0.3s;
            }}
            type="primary"
            className="ant-list-item"
          >
            <span>Log Out</span>
          </button>
        </Form>
      </div >
    ),
  },
];

const DropdownButton = ({ userName }) => (
  <Dropdown menu={{ items }}>
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
        <UserOutlined />
        <DownOutlined />
      </Button>
    </Space>
  </Dropdown>
);

export default DropdownButton;
