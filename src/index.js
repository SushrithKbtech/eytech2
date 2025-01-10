import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure this file exists
import App from "./App"; // Ensure this file exists
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
