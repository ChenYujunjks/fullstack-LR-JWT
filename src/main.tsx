import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Assets.tsx";
import Login from "./login.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Login />
    <App />
  </StrictMode>
);
