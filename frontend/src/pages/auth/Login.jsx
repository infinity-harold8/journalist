import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../application/api/authApi";
import { setCredentials, setUser } from "../../application/features/authSlice";
import { useNavigate } from "react-router";
// import LogoBuilding from "../../assets/logo_building.png";
import CompanyLogo from "../../assets/logo.png";

function Login() {
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();

  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userName, password);
    try {
      const response = await login({ user_name: userName, password }).unwrap();
      if (response.isSuccess == true) {
        // console.log(response.user); -> response.user.user
        dispatch(setCredentials(response.accessToken));
        dispatch(setUser(response.user));

        navigate("/reports");

        // if (response.user.role === "admin") {
        //   navigate("/dashboard");
        // } else {
        //   navigate("/reports");
        // }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login_container">
      <form onSubmit={handleSubmit} className="login_panel">
        <div className="login_contents">
          <img src={CompanyLogo} className="company_logo" />

          <div className="login_header">
            <h2>Login to your Account</h2>
            <div>Enter your Username below to login your account</div>
          </div>
          <div className="logo_input_contents">
            <label>User Name</label>
            <input
              type="text"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="logo_input_contents">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login_buttons">
            <button type="submit">Login</button>
            <a>forgot password</a>
          </div>
          <div className="login_footer">
            By clicking continue, you agree to our{" "}
            <b>Terms of Service and Privacy</b>
          </div>
        </div>
      </form>

      <div className="company_img_panel">
        {/* <img src={LogoBuilding} className="building_image" /> */}
      </div>
    </div>
  );
}

export default Login;
