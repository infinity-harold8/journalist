import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const LoginRoute = () => {
  const { isAuthenticated, isAuthReady } = useSelector((state) => state.auth);

  // Wait for /auth/me before deciding
  // if (!isAuthReady) {
  //   return <p>Checking session...</p>;
  // }

  // Already logged in: do not show login page
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Not logged in: show the login page
  return <Outlet />;
};

export default LoginRoute;
