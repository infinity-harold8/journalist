// import React from 'react'
import { Search, CirclePlus, Pencil, Trash } from "lucide-react";
function ReportsPage() {
  return (
    <div className="reports_container">
      <div className="reports_header">
        <div className="reports_header_contents">
          <div className="reports_header_title">Reports Management</div>
          <div className="reports_header_sub_title">
            Track and manage all reports generation.
          </div>
        </div>
        <div className="reports_header_search_contents">
          <input
            className="reports_header_search"
            type="text"
            placeholder="Search Report Name"
          />
          <button className="reports_header_search_btn">
            <Search className="reports_header_search_icon" />
          </button>
          <button className="reports_header_add_btn">
            <CirclePlus className="reports_header_add_icon" />
          </button>
        </div>
      </div>
      <div className="reports_body">
        <table className="reports_body_table">
          <thead>
            <tr>
              <th>Report Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="reports_content_list_name">
                  Executive Financial Health Summary
                </div>
                <div className="reports_content_list_actions">
                  <button className="reports_pencil_btn">
                    <Pencil className="reports_pencil_icon" />
                  </button>
                  <button className="reports_trash_btn">
                    <Trash className="reports_trash_icon" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReportsPage;
