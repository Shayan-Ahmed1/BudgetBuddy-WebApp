import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
// import AppLayout from "./Layout/AppLayout";
import App from "./App";
// import AppLayout from "./layout/AppLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="main">
      <App />
      {/* <AppLayout /> */}
    </div>
  </React.StrictMode>
);
