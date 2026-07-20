import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

const AuthenticatedRoute = () => {
  const location = useLocation();

  const { isAuthenticated, isAuthReady } = useSelector((state) => state.auth);

  // The initial /auth/me request is still processing
  //   if (!isAuthReady) {
  //     return <p>Checking session...</p>;
  //   }

  // Authentication check finished, but user is not logged in
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location.pathname,
        }}
      />
    );
  }

  // User is authenticated: render the matched protected page
  return <Outlet />;
};

export default AuthenticatedRoute;
