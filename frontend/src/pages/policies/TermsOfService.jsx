// import React from 'react'
import CompanyLogo from "../../assets/logo.png";

function TermsOfService() {
  return (
    <div className="tos_container">
      <div className="tos_header">
        <img
          src={CompanyLogo}
          width={260}
          height={60}
          // className="company_logo"
        />
      </div>
      <div className="tos_body">
        <div className="tos_body_title">JOURNALIST</div>
        <div className="tos_body_sub_title">
          A Report Generation Application of Marikina Valley Medical Center
        </div>
        <div className="tos_body_content_container">
          <div className="tos_body_contents">Terms of Use</div>
          <div className="tos_body_sub_contents">
            Welcome to GROW, the HR Onboarding Application of Marikina Valley
            Medical Center (“MVMC,” “we,” or “us”). GROW is developed, owned,
            and maintained by the Information and Communication Technology
            Department (ICT) and is used by the Human Resources Department (HR)
            to support employee onboarding and HR administration. These Terms of
            Use (“Terms”) govern your access to and use of GROW, including any
            related software, features, content, and services (collectively, the
            “Service”). By accessing or using the Service, you agree to be bound
            by these Terms.
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
