import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./assets/styles/main.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <Router>
      <App />
    </Router>
  </RecoilRoot>
);
