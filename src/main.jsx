import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MobileContextProvider from "./context/mobile-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MobileContextProvider>
        <App />
      </MobileContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
