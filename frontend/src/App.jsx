// import React from "react";

import { Routes, Route } from "react-router";

import Login from "./pages/auth/Login";
// import LoginLayout from "./layouts/LoginLayout";
// import LoginRoute from "./routes/LoginRoute";
// import AuthenticatedRoute from "./routes/AuthenticatedRoute";
// import Me from "./pages/Me";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/reports/page";

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route element={<LoginRoute />}> */}
        <Route path="/" element={<Login />} />
        {/* </Route> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        {/* <Route element={<AuthenticatedRoute />}>
          <Route path="/" element={<Me />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </div>
  );
};

export default App;
