// import React from 'react'
import { useSelector } from "react-redux";
import { selectAllUsers, useGetUsersQuery } from "../application/api/userApi";
import CompanyLogo from "../assets/logo.png";
import { Search, CirclePlus } from "lucide-react";

import { UserRoundPlus, SquarePen, Trash } from "lucide-react";
function Page() {
  const { isLoading, isError, isSuccess } = useGetUsersQuery();
  const users = useSelector(selectAllUsers);
  console.log(users.map((user) => user._id));
  return (
    // <div className="users_container">
    //   <div className="users_content_header_container">
    //     <div className="users_content_header">
    //       <h1>Browse Users</h1>
    //       <h3>Create and Update users!</h3>
    //     </div>
    //   </div>
    //   <div className="users_content_body">
    //     <div className="users_add_containers">
    //       <div className="users_search_bar">
    //         <input placeholder="Search Users By User Name" />
    //       </div>
    //       <div className="UserRoundPlus">
    //         <UserRoundPlus />
    //       </div>
    //     </div>

    //     <table className="users_content_body_left">
    //       <thead>
    //         <tr>
    //           <th># ID</th>
    //           <th>User Name</th>
    //           <th>Role</th>
    //           <th>Is Active</th>
    //           <th>Actions</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {users.map((user, i) => {
    //           return (
    //             <tr key={i}>
    //               <td>{i + 1}</td>
    //               <td>{user.user_name}</td>
    //               <td>{user.role}</td>
    //               <td>{user.is_active ? "Active" : "In-Active"}</td>
    //               <td>
    //                 <SquarePen /> <Trash />
    //               </td>
    //             </tr>
    //           );
    //         })}
    //       </tbody>
    //     </table>

    //     <div className="users_content_body_right">
    //       Right panel sliding view to
    //     </div>
    //   </div>
    // </div>
    <div className="users_container">
      <div className="users_header">
        <div className="users_header_contents">
          <div className="users_header_title">Users Management</div>
          <div className="users_header_sub_title">
            Track and manage all reports generation.
          </div>
        </div>
        <div className="user_header_search_contents">
          <input
            className="user_header_search"
            type="text"
            placeholder="Search User Name"
          />
          <button className="user_header_search_btn">
            <Search className="user_header_search_icon" />
          </button>
          <button className="user_header_add_btn">
            <CirclePlus className="user_header_add_icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
