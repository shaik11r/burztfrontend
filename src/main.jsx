import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StudentContextProvider } from "./providers/StudentContextProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StudentContextProvider>
        <App />
      </StudentContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
