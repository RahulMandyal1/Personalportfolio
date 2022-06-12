import React from "react";
import ReactDOM from "react-dom/client";
import AppTwo from "./components/AppTwo";
import { BrowserRouter } from "react-router-dom";
import "./stylesheets/index.css"
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter>
    <AppTwo />
  </BrowserRouter>
);
