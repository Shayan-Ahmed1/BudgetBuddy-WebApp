import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/24/solid";
const Error = () => {
  const error = useRouteError()
  const navigate = useNavigate()

  const buttonStyle = {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'black', // Dark button color
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    margin: "10px",
    display: "flex",
    alignItems: "center",
    width: "110px",
    justifyContent: "space-evenly",
  };

  return (
    <div className="error">
      <h1>Uh Oh! We've got a problem</h1>
      <h3>{error.message || error.statusText}</h3>
      <div className="flex-md">
        <button
          style={buttonStyle}
          onClick={() => navigate(-1)}
        >
          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>
        <Link
          to="/"
          style={buttonStyle}
        >
          <HomeIcon width={20} />
          <span>Go HOME</span>
        </Link>
      </div>
    </div>
  )
};

export default Error;
