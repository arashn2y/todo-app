import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

export default router;
