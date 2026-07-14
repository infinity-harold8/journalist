import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import CSS
import "./index.css";
import "./styles/components/navigationBarStyles.css";
import "./styles/pages/login/styles.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>,
);
