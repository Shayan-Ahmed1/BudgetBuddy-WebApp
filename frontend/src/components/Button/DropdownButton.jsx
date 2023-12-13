// RRD imports
import { Link } from "react-router-dom";

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
        {/* <Form
          method="post"
          action="/login"
        // onSubmit={(event) => {
        //   if (!confirm("Do you want to log out?")) {

        //   }
        // }}
        > */}
        <Link to="/login">
          <Button
            style={{
              color: "white",
              fontSize: "16px",
              height: 35,
            }}
            type="primary"
            className="ant-list-item"
          >
            <span>Log Out</span>
          </Button>
        </Link>

        {/* </Form> */}

      </div>
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
