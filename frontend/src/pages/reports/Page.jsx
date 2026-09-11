// import React from 'react'
import CompanyLogo from "../../assets/logo.png";
function ReportsPage() {
  return (
    <div className="reports_container">
      <div className="reports_navigation_bar">
        <div className="reports_navigation_contents">
          <h1>Journalist</h1>
          <img src={CompanyLogo} className="reports_company_logo" />
          <div className="reports_user_data_container">
            <h4>Harold Del Rosario</h4>|<button> Logout</button>
          </div>
        </div>
      </div>
      <div className="reports_content_header_container">
        <div className="reports_content_header">
          <h1>Browse Reports</h1>
          <h3>Select your report and then Generate!</h3>
        </div>
      </div>
      <div className="reports_content_body">
        <div className="reports_content_body_left">Search Sort</div>
        <div className="reports_content_body_right">
          Right panel sliding view to
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;
