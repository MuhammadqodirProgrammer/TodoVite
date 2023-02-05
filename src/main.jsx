import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContext, AuthProvidor } from "./context/AuthContext";
import { UserProvidor } from "./context/UserContex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvidor>
        <UserProvidor>
          <App />
        </UserProvidor>
      </AuthProvidor>
    </BrowserRouter>
  </React.StrictMode>
);
