import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const container = document.getElementById("root");
if (!container) throw new Error("Không tìm thấy phần tử #root trong DOM");

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
