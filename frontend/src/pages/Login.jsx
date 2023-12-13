import React from "react";

const Login = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "200%",
          width: "100%",
          // zIndex: 2,
          backgroundImage: `url(https://img.freepik.com/free-photo/low-angle-shot-mesmerizing-starry-sky_181624-27925.jpg?w=740&t=st=1702437860~exp=1702438460~hmac=8f926ff26f98fcd3f43f8f6797fc3ec572d4e44768e24041660e5c047c67bca1)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          // backgroundSize: "100%",
        }}
      >
        <div
          style={{
            // color: "white",
            display: "grid",
            // justifyContent: "center",
            justifyItems: "center",
            marginTop: 100,
          }}
        >
          <div
            style={{
              display: "grid",
              // justifyContent: "center",
              justifyItems: "center",
              border: "solid 2px white",
              width: "350px",
              height: "400px",
              alignItem: "center",
              background: "white",
              borderRadius: "9px",


            }}
          >
            <h2>Login Form</h2>

          </div>
        </div>

      </div>
    </>

  );
};

export default Login;
