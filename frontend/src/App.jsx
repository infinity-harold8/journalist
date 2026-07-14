import { Route, Routes } from "react-router";

// Libraries
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
  return (
    <div className="app_root">
      {isAdmin && <div className="admin_side_bar">Admin Content</div>}
      <div className="main_content">
        <NavigationBar />
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
