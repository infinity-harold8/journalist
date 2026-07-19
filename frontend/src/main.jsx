import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// CSS
import "./index.css";
import "./styles/components/navigationBarStyles.css";
import "./styles/pages/login/styles.css";

// Libraries
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

// Application
import App from "./App.jsx";
import store from "./app/store.js";

// Default
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//         <Toaster />
//       </BrowserRouter>
//     </Provider>
//   </StrictMode>,
// );

// Redux Toolkit Standard
const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </Provider>
    </StrictMode>,
  );
} else {
  throw new Error(
    "Root container not found. Ensure there is an element with id 'root' in your HTML.",
  );
}
