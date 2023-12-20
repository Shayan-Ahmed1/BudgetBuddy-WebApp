import React from "react";

export async function homeAction({ request }) {
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  localStorage.setItem("userName", JSON.stringify(formData.userName))

}
const Home = () => {
  return (
    <div>
      <div>
        <h1>
          Take Control of <span>Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your journey today.
        </p>
      </div>

    </div>
  );
};

export default Home;
