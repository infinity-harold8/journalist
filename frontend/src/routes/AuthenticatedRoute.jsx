import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthenticatedRoute = () => {
  const { isAuthenticated, isAuthReady } = useSelector((state) => state.auth);

  // Authentication is still being checked.
  if (!isAuthReady) {
    return <div>Checking authentication...</div>;
  }

  // Checking finished and user is not authenticated.
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Checking finished and user is authenticated.
  return <Outlet />;
};

export default AuthenticatedRoute;
