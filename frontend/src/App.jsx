// import React from "react";

import { Routes, Route } from "react-router";

import Login from "./pages/auth/Login";
// import LoginLayout from "./layouts/LoginLayout";
// import LoginRoute from "./routes/LoginRoute";
// import AuthenticatedRoute from "./routes/AuthenticatedRoute";
// import Me from "./pages/Me";
// import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/reports/page";
import Users from "./pages/Users";
import TermsOfUse from "./pages/policies/TermsOfService";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route element={<LoginRoute />}> */}
        <Route path="/" element={<Login />} />
        {/* </Route> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />

        {/* <Route element={<AuthenticatedRoute page_title={"Users"} />}> */}
        <Route path="/users" element={<Users />} />
        <Route path="/terms-of-service" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* </Route> */}

        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </div>
  );
};

export default App;
