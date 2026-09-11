// import React from "react";

const AuthenticatedLayout = ({ children }) => {
  return (
    <div className="authenticated_layout_container">
      <main>{children}</main>
    </div>
  );
};

export default AuthenticatedLayout;
