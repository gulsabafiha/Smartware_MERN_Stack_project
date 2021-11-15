import React, { useState } from "react";
import { Link,useLocation,useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState([]);
  const { user, isLoading, loginUser, authError } = useAuth();

  const location= useLocation();
  const history= useHistory();

  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newloginData = { ...loginData };
    newloginData[field] = value;
    setLoginData(newloginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password,location,history);
    e.preventDefault();
  };
  return (
    <div>
      <Header></Header>
      <h1 className="m-5">Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <div class="m-5 row">
          <label for="inputEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              name="email"
              onChange={handleOnchange}
              class="form-control"
              type="email"
              id="staticEmail"
            />
          </div>
        </div>
        <div class="m-5 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              name="password"
              onChange={handleOnchange}
              class="form-control"
              id="inputPassword"
            />
          </div>
          <div class="col-sm-10">
            <input
              type="submit"
              class="btn btn-outline-warning"
              value="Login"
            />
          </div>
          <div class="col-sm-10">
            <Link to="/register">
              <button className="btn btn-link">
                New user? Please Register
              </button>
            </Link>
          </div>
        </div>
      </form>
      {isLoading && (
        <div class="spinner-border text-warining" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      {user?.email && (
        <div class="alert alert-warning" role="alert">
          User Created Successfully!!
        </div>
      )}
      {authError && (
        <div class="alert alert-danger d-flex align-items-center" role="alert">
          <div>{authError}</div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};
export default Login;
