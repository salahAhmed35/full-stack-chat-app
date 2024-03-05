import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./contexts/userDataContext";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
