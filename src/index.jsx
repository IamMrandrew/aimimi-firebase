import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";
import Authenticate from "./Authenticate";
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router>
        <Authenticate />
      </Router>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
