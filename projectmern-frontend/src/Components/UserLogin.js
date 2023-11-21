import "./style.css";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import { useCookies } from "react-cookie";

export default function UserLogin() {
  return (
    <div>
      <Login />
    </div>
  );
}

const Login = () => {
  // const [_, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      // setCookies("access_token", result.data.token);
      navigate("/AdminLogin");

    } catch (error) {
      console.error(error);
      console.log("Login UnSuccessful");
    }

  };

  const location = useLocation();

  return (
    <div className="UserLogin">
      {
        location.pathname === '/AdminLogin' ?
          <Link to='/AddEvent' className="btn btn-success" style={{ fontFamily: 'impact' }} >
            <i className="fa-solid fa-circle-plus fa-lg me-2"></i>Add Event
          </Link>
          : null
      }

      {/* Login Button */}
      {
        location.pathname === '/AdminLogin' ?
          <Link to='/' className="btn btn-info" style={{ fontFamily: 'impact' }} >
            <i class="fa-solid fa-user fa-lg me-2"></i>Admin
          </Link>
          : <button
            type="button"
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#LoginModal"
            style={{ fontFamily: 'impact' }}>
            <i className="fa-solid fa-right-to-bracket fa-lg me-2"></i>Login
          </button>
      }


      {/* Modal */}
      <div
        className="modal fade"
        id="LoginModal"
        tabIndex="-1"
        aria-labelledby="LoginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2" id="LoginModalLabel" style={{ fontFamily: 'impact' }}>
                Login{" "}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body p-5 pt-0">
              <form className="" onSubmit={handleSubmit}>
                <div className="form-floating mb-3 ">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="name@example.com"
                    style={{
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "20px",
                      backgroundPosition: "97%",
                    }}
                    data-temp-mail-org="0"
                  />
                  <label htmlFor="username">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password"
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <button
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-success"
                  type="submit" data-bs-dismiss="modal" style={{ fontFamily: 'impact' }}
                >
                  Login
                </button>
                <small className="text-body-secondary">
                  By clicking Login, you agree to the terms of use.
                </small>
                <hr className="my-4" />
                <h2 className="fs-5 fw-bold mb-3" style={{ fontFamily: 'monospace' }}>
                  Not Registered? Register Now
                </h2>
                <Link to="/Register" className="btn-info btn w-100" style={{ fontFamily: 'impact' }}>
                  Register
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
