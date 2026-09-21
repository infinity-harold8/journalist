import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import { store } from "../src/application/store.js";

//Syles
import "./index.css";
import "./styles/layouts/login/styles.css";
import "./styles/pages/login/styles.css";
import "./styles/pages/reports/styles.css";
import "./styles/pages/users/styles.css";
import "./styles/pages/libraries/lucide_styles.css";
import "./styles/pages/policies/tos_styles.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
