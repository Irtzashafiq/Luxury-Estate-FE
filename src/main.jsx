import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserContextState from "./context/UserContext/UserContextState.jsx";
import AgencyContextState from "./context/agencyContext/agencyContextState.jsx";
import CityContextState from "./context/cityContext/cityContextState.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextState>
        <AgencyContextState>
          <CityContextState>
            <ToastContainer />
            <App />
          </CityContextState>
        </AgencyContextState>
      </UserContextState>
    </BrowserRouter>
  </React.StrictMode>
);
