import { useState } from "react";

// This will be use for Redux Slicer
import { useSelector, useDispatch } from "react-redux";

import { setUser, clearUser } from "../../features/auth/authSlice.js";

// Getting the mutation hook from AuthAPI
import {
  authApi,
  useLoginMutation,
  useLogoutMutation,
} from "../../features/auth/authAPI.js";

const AuthLogin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // Useful in Slicer - we will not set the user after login
  const auth = useSelector((slicer) => slicer.auth);
  const dispatch = useDispatch();

  // Use mutation hook is from RTK Query where I can call the login mutation and get the result, error, loading state, etc.
  const [login, { data, isSuccess, isError }] = useLoginMutation();
  const [logout] = useLogoutMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Referencing the Login Mutation to send data to the backend then we will get the immediate response from the backend using unwrap? not sure kung tama pagkakaintindi ko
      const response = await login({
        user_name: userName,
        password,
      }).unwrap();
      // console.log("test", data, error, isLoading, isSuccess, isError);

      // Set Auth Slicer For user
      dispatch(setUser(data));

      // Response with Message only much better since we can use the data from return value within Redux Api
      console.log("Login successful:", response.message);
    } catch (error) {
      console.log("Login failed:", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user_name">User Name</label>

          <input
            id="user_name"
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit">Login</button>

        {isError && <p> Login failed</p>}
      </form>

      <button
        onClick={async (event) => {
          event.preventDefault();
          const isLoggingOut = await logout().unwrap();
          console.log("Logged out successfully", isLoggingOut.message);
          dispatch(clearUser());
          dispatch(authApi.util.resetApiState());
          setUserName("");
          setPassword("");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default AuthLogin;
