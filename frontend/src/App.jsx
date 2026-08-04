import { Navigate, Route, Routes } from "react-router-dom";

import { useGetCurrentUserQuery } from "./features/auth/authAPI.js";

import Dashboard from "./pages/Dashboard.jsx";
import ReportPage from "./pages/reports/page.jsx";
import AuthLogin from "./pages/auth/Page.jsx";

import LoginRoute from "./routes/LoginRoute.jsx";
import AuthenticatedRoute from "./routes/AuthenticatedRoute.jsx";

const App = () => {
  const currentUserQuery = useGetCurrentUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  console.log("Current user query:", {
    isLoading: currentUserQuery.isLoading,
    isFetching: currentUserQuery.isFetching,
    isSuccess: currentUserQuery.isSuccess,
    isError: currentUserQuery.isError,
    data: currentUserQuery.user,
    error: currentUserQuery.error,
  });

  return (
    <div className="app_root">
      <Routes>
        <Route element={<LoginRoute />}>
          <Route path="/login" element={<AuthLogin />} />
        </Route>

        <Route element={<AuthenticatedRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<ReportPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
