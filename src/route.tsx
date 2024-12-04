import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import ContactUs from "./screens/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/contact-us",
    element: <ContactUs />
  }
]);

export default router;
