import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "./context/ThemeContextProvider";
import "./index.css";
import router from "./route";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
