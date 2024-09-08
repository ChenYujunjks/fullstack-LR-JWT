import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Login from "./login.tsx";
import Register from "./register.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Login />
    <Register />
    <App />
  </StrictMode>
);
