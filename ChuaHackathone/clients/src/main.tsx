import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import Login from "./page/login/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Login />
      <RouterProvider />
    </Provider>
  </StrictMode>
);
