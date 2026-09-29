import { NavLink, Outlet, useLocation } from "react-router";
import { useSelector } from "react-redux";
import CompanyLogo from "../assets/logo.png";
import { CircleUserRound } from "lucide-react";

const AuthenticatedRoute = () => {
  // const { isAuthenticated } = useSelector((state) => state.auth);'
  const currentRoute = useLocation().pathname;
  console.log(currentRoute);
  // Checking finished and user is not authenticated.
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }

  // Checking finished and user is authenticated.
  return (
    <>
      <div className="authenticated_navigation_bar">
        <div className="authenticated_navigation_contents">
          <div className="authenticated_logo_app">
            <img src={CompanyLogo} className="authenticated_company_logo" />
            <h3>Journalist</h3>
          </div>

          <div className="authenticated_user_data_container">
            <CircleUserRound height={30} width={30} />
            <div>Harold Del Rosario</div>
          </div>
        </div>
      </div>
      <div className="authenticated_sub_navigation_bar">
        <div className="authenticated_contents">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Users
          </NavLink>
          <NavLink
            to="/reports"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Reports
          </NavLink>
        </div>
      </div>
      <div className="authenticated_body_container">
        <div className="authenticated_body_contents">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthenticatedRoute;
