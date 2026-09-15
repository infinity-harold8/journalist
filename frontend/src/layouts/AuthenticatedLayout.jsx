// import React from "react";

const AuthenticatedLayout = ({ children, page_title }) => {
  return (
    <div className="authenticated_layout_container">
      <main>{children}</main>
    </div>
  );
};

export default AuthenticatedLayout;
