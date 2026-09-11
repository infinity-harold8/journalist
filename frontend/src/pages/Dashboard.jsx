// import React from 'react'
import { useSelector } from "react-redux";

function Dashboard() {
  const user = useSelector((state) => state.auth?.user);
  console.log(user.user_name);
  return <div>Dashboard {user.user_name}</div>;
}

export default Dashboard;
