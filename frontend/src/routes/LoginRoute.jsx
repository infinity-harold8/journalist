import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginRoute = () => {
  const { isAuthenticated, isAuthReady } = useSelector((state) => state.auth);
  console.log(isAuthReady);
  if (!isAuthReady) {
    return <div>Checking authentication...</div>;
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default LoginRoute;
