import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../application/api/authApi";
import { setCredentials } from "../application/features/authSlice";

function Login() {
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();

  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userName, password);
    try {
      const response = await login({ user_name: userName, password }).unwrap();
      if (response.isSuccess == true) {
        dispatch(setCredentials(response.accessToken));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      Login
      <div>Test</div>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
