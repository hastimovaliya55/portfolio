import React from "react";
import ReactDOM from "react-dom/client"; // 👈 updated import
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 👇 updated rendering method
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: still report performance
reportWebVitals();
