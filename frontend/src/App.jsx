import { Route, Routes } from "react-router";

// Libraries
import toast from "react-hot-toast";
import axios from "axios";

// Application Pages
import HomePage from "./pages/HomePage.jsx";
import UserPage from "./pages/users/Page.jsx";
import ReportPage from "./pages/reports/Page.jsx";

// Application Component
import NavigationBar from "./components/NavigationBar.jsx";

const App = () => {
  const isAdmin = true; // Replace with actual logic to determine if the user is an admin
  return (
    <div
      data-theme="corporate"
      className="min-h-screen flex flex-row justify-between"
    >
      {isAdmin && <div className="p-4 border-2 w-auto">Admin Content</div>}
      <div className="flex-1 flex flex-col">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/reports" element={<ReportPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
