import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../features/auth/authSlice.js";

const AuthLogin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      login({
        userName,
        password,
      }),
    );
    console.log("Username:", userName);
    console.log("Password:", password);
    console.log("Auth State:", auth);
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
      </form>
      <button
        onClick={() => {
          dispatch(logout());
          setUserName("");
          setPassword("");
        }}
      >
        Logout
      </button>
      <h2>Redux Authentication State</h2>

      <pre>{JSON.stringify(auth, null, 2)}</pre>
    </div>
  );
};

export default AuthLogin;
