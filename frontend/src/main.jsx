import { StrictMode, React } from "react";
import { createRoot } from "react-dom/client";

// Import CSS
import "./index.css";
import "./styles/components/navigationBarStyles.css";
import "./styles/pages/login/styles.css";


// Import Libraries
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux'

// Import Api
import store from './app/store'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
