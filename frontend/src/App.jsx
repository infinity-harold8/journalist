import { Route, Routes } from "react-router";

// Libraries
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice.js";
// import toast from "react-hot-toast";
// import axios from "axios"; -- Uninstalled

// Application Pages
import HomePage from "./pages/HomePage.jsx";
import UserPage from "./pages/users/Page.jsx";
import ReportPage from "./pages/reports/Page.jsx";
import AuthLogin from "./pages/auth/AuthLogin.jsx";

// Application Component
import NavigationBar from "./components/NavigationBar.jsx";

const App = () => {
  const isAdmin = true; // Replace with actual logic to determine if the user is an admin

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="app_root">
      {isAdmin && <div className="admin_side_bar">Admin Content</div>}
      <div className="main_content">
        <NavigationBar />
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/login" element={<AuthLogin />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
