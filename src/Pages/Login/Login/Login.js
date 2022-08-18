import React, { useState } from "react";
import { NavLink ,useLocation,useNavigate} from "react-router-dom";
import "./Login.css";
// import Alert from "react-bootstrap/Alert";
// import { Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const {  loginUser  } = useAuth(); //googleSignIn, ,isLoading, error, user
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
    const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...loginData };
    newUser[field] = value;
    setLoginData(newUser);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password,location,navigate);
    e.preventDefault();
  };
  return (
    <div className="row login pb-5">
      <div className="col-lg-5">
        <img
          className="w-100 mt-5 pt-5"
          src="https://srrafi.com/form-demo/formify/assets/img/chat-left.png"
          alt=""
        />
      </div>
      <div className="col-lg-7 bg2 mb-5">
        <h3 className="mt-5 mb-4">Sign in to Coding Institute</h3>
        <button
          // onClick={googleSignIn}
          style={{ width: "500px" }}
          className="btn btn-light ms-2"
        >
          <img
            style={{ width: "28px" }}
            src="https://i.ibb.co/W50g0mR/google.png"
            alt=""
          />{" "}
          Sign in with Google
        </button>
        <h6 className="text-center mt-4">or</h6>
        <form 
        onSubmit={handleLoginSubmit}
         className="loginform">
          <label className="ps-2">Email</label>
          <input
            required
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleOnchange}
          />
          <label className="ps-2">PassWord</label>
          <input
            required
            placeholder="Your password"
            type="password"
            name="password"
            onChange={handleOnchange}
          />{" "}
          <br />
          <button
            style={{ width: "500px" }}
            className="btn btn-dark mt-3 ms-2"
            type="submit"
          >
            Login
          </button>{" "}
          <br />
          <NavLink
            to="/register"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bolder",
              paddingLeft: "10px",
            }}
          >
            New User? Please Register
          </NavLink>
        </form>
        {/* {isLoading && <Spinner animation="grow" />}
        {user?.email && (
          <Alert variant="success">Login Successfully </Alert>
        )}
        {error && <Alert variant="danger">{error}</Alert>} */}
      </div>
    </div>
  );
};

export default Login;
