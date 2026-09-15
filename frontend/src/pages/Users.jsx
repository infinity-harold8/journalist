// import React from 'react'
import { useSelector } from "react-redux";
import { selectAllUsers, useGetUsersQuery } from "../application/api/userApi";
import CompanyLogo from "../assets/logo.png";

import { UserRoundPlus, SquarePen, Trash } from "lucide-react";
function Page() {
  const { isLoading, isError, isSuccess } = useGetUsersQuery();
  const users = useSelector(selectAllUsers);
  console.log(users.map((user) => user._id));
  return (
    <div className="users_container">
      <div className="users_navigation_bar">
        <div className="users_navigation_contents">
          <h1>Journalist</h1>
          <img src={CompanyLogo} className="users_company_logo" />
          <div className="users_user_data_container">
            <h4>Harold Del Rosario</h4>|<button> Logout</button>
          </div>
        </div>
      </div>
      <div className="users_content_header_container">
        <div className="users_content_header">
          <h1>Browse Users</h1>
          <h3>Create and Update users!</h3>
        </div>
      </div>
      <div className="users_content_body">
        <div className="users_add_containers">
          <div className="users_search_bar">
            <input placeholder="Search Users By User Name" />
          </div>
          <div className="UserRoundPlus">
            <UserRoundPlus />
          </div>
        </div>

        <table className="users_content_body_left">
          <thead>
            <tr>
              <th># ID</th>
              <th>User Name</th>
              <th>Role</th>
              <th>Is Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{user.user_name}</td>
                  <td>{user.role}</td>
                  <td>{user.is_active ? "Active" : "In-Active"}</td>
                  <td>
                    <SquarePen /> <Trash />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* <div className="users_content_body_right">
          Right panel sliding view to
        </div> */}
      </div>
    </div>
  );
}

export default Page;
