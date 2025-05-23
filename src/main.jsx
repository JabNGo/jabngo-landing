import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <h1 style={{ padding: "2rem", backgroundColor: "white", color: "black" }}>
    ✅ Vite is working
  </h1>
);
