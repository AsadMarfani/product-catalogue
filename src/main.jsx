import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "animate.css/animate.css";
import "wowjs/css/libs/animate.css";

import "./index.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
