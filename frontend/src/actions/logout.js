import { redirect } from "react-router-dom";

// helpers
import { deleteItem } from "../helper";
import { toast } from "react-toastify";

// export async function loginAction() {
//   // logout the user
//   localStorage.setItem("userName", "Shayan Ahmed");
//   toast.success("You've been logged in!");
//   // return redirect
//   return redirect("/");
// }

export async function logoutAction() {
  // logout the user
  deleteItem({ key: "userName" });
  toast.success("You've been logged out!");
  // return redirect
  return redirect("/login");
}
