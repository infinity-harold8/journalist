// import React from "react";
import CompanyLogo from "../../assets/logo.png";
import { CircleArrowLeft } from "lucide-react";
import { Link } from "react-router";

function PrivacyPolicy() {
  return (
    <div className="pp">
      <div className="pp_container">
        <div className="pp_header">
          <img
            src={CompanyLogo}
            width={260}
            height={60}
            // className="company_logo"
          />
          <Link to="/" className="pp_header_back_btn">
            <CircleArrowLeft width={40} height={40} />
          </Link>
        </div>
        <div className="pp_body">
          <div className="pp_body_title">JOURNALIST</div>
          <div className="pp_body_sub_title">
            A Report Generation Application of Marikina Valley Medical Center
          </div>
          <div className="pp_body_content_container">
            <div className="pp_body_contents">Privacy Policy</div>
            <div className="pp_body_sub_contents">
              This Privacy Policy explains how the Information and Communication
              Technology Department (ICT) of Marikina Valley Medical Center
              (“MVMC,” “we,” “us,” or “our”) collects, uses, protects, and
              discloses personal information in relation to our HR onboarding
              application, GROW. MVMC is committed to complying with the Data
              Privacy Act of 2012 and other applicable Philippine privacy laws,
              and to protecting the privacy and security of personal information
              entrusted to us. This Privacy Policy applies to individuals who
              use GROW, including all employees of Marikina Valley Medical
              Center.
            </div>
          </div>
          <div className="pp_body_content_container_2">
            <div className="pp_body_contents">I. Information We Collect</div>
            <div className="pp_body_sub_contents">
              When you use GROW, we may collect personal information necessary
              for HR onboarding purposes. This includes, but is not limited to,
              your name, contact details, employment history and details,
              government-issued identification numbers, compensation,
              allowances, benefits, and other employment-related information. We
              may also collect usage-related information, such as IP addresses,
              device information, browser type, operating system, and details on
              how you access and use GROW. All information collected is used
              solely for legitimate onboarding and HR administration purposes.
            </div>
            <div className="pp_body_contents">
              II. Use of Personal Information
            </div>
            <div className="pp_body_sub_contents">
              Personal information collected through GROW is used to provide,
              manage, and maintain the system, support HR onboarding activities
              such as account creation, document submission, task tracking, and
              orientation scheduling, respond to employee inquiries, and provide
              technical support. Information may also be used to improve system
              functionality, performance, and user experience through aggregated
              and anonymized analysis. All personal information is processed and
              stored securely using encrypted databases and internal safeguards
              in accordance with applicable laws.
            </div>
            <div className="pp_body_contents">
              III. Sharing of Personal Information
            </div>
            <div className="pp_body_sub_contents">
              GROW does not share personal information with external parties
              except as required to deliver the system or comply with legal
              obligations. Personal information may be shared with trusted
              service providers who assist in operating and maintaining GROW,
              under strict confidentiality obligations. Information may also be
              disclosed when required by law or to protect the rights of MVMC.
              In the event of a merger, acquisition, or transfer of assets
              involving GROW, users will be notified of any change in ownership
              or control of personal information.
            </div>
            <div className="pp_body_contents">
              IV. Security of Personal Information
            </div>
            <div className="pp_body_sub_contents">
              MVMC implements reasonable technical, administrative, and
              organizational safeguards to protect personal information against
              unauthorized access, use, or disclosure. Security measures include
              encryption, access controls, and regular security assessments.
              Personal information is retained only for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy or as
              required or permitted by law, after which it is securely deleted
              or anonymized.
            </div>
            <div className="pp_body_contents">V. User's Right and Choices</div>
            <div className="pp_body_sub_contents">
              Employees using GROW have the right to access, review, and update
              their personal information through the Human Resources Department
              or designated system administrator. Employees may choose not to
              provide certain information or opt out of using certain features
              of GROW, although this may limit access to some onboarding
              functions. Employees may also exercise their rights under
              applicable laws, including the rights to access, correction,
              erasure, and restriction of processing, by contacting the ICT
              Department using the information provided below.
            </div>
          </div>
        </div>
        <div className="pp_footer">
          <div className="pp_footer_header">
            If you have any questions or concerns regarding this Terms of Use or
            the use of JOURNALIST, please contact us at:
          </div>
          <div className="pp_footer_title">JOURNALIST</div>
          <div className="pp_footer_sub_title">
            A Report Generation Application of Marikina Valley Medical Center
          </div>
          <div className="pp_footer_other_information">
            <div>
              <b>Address:</b> 3F MAB, Sumulong Highway Cor, Aguinaldo St.,
              Marikina City, 1800
            </div>
            <div>
              <b>Email:</b> mvmcicthelpdesk@mvmc.com.ph
            </div>
            <div>
              <b>Phone:</b> local 310
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
