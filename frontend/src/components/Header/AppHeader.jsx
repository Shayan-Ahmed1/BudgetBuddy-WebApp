// RRD imports
import { Link } from "react-router-dom";
// components
import DropdownButton from "../Button/DropdownButton";
// antd
import { Layout, Menu } from "antd";
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
      }}
    >
      <Link to="/dashboard" aria-label="Go to home">
        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            fontSize: "30px",
            fontFamily: "calibre",
            marginLeft: "20px",
          }}
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
      {
        userName && (
          <DropdownButton userName={userName} />
        )
      }
    </Header>
  );
};

export default AppHeader;
