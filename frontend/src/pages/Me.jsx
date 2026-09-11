import { React, useState } from "react";
import { useGetCurrentUser } from "../application/api/authApi";

const Me = () => {
  const getCurrentUser = useGetCurrentUser();
  console.log(getCurrentUser);
  return <div>Me {getCurrentUser}</div>;
};

export default Me;
