import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const AuthenticatedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  // Checking finished and user is not authenticated.
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Checking finished and user is authenticated.
  return <Outlet />;
};

export default AuthenticatedRoute;
