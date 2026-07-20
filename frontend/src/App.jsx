import { Navigate, Route, Routes } from "react-router-dom";

import { useGetCurrentUserQuery } from "./features/auth/authAPI.js";

import Dashboard from "./pages/Dashboard.jsx";
import AuthLogin from "./pages/auth/Page.jsx";

import LoginRoute from "./routes/LoginRoute.jsx";
import AuthenticatedRoute from "./routes/AuthenticatedRoute.jsx";

const App = () => {
  const { isLoading, isError, error } = useGetCurrentUserQuery();

  console.log("Session check:", {
    isLoading,
    isError,
    error,
  });

  return (
    <div className="app_root">
      <Routes>
        <Route element={<LoginRoute />}>
          <Route path="/login" element={<AuthLogin />} />
        </Route>

        <Route element={<AuthenticatedRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
