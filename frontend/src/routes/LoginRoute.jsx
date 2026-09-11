import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const LoginRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default LoginRoute;
