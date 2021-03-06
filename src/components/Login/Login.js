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

  const handleOnchange = e => {
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
        <div className="m-5 row">
          <label for="inputEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="email"
              onChange={handleOnchange}
              className="form-control"
              type="email"
              id="staticEmail"
            />
          </div>
        </div>
        <div className="m-5 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              name="password"
              onChange={handleOnchange}
              className="form-control"
              id="inputPassword"
            />
          </div>
          <div className="col-sm-10">
            <input
              type="submit"
              className="btn btn-outline-warning"
              value="Login"
            />
          </div>
          <div className="col-sm-10">
            <Link to="/register">
              <button className="btn btn-link">
                New user? Please Register
              </button>
            </Link>
          </div>
        </div>
      </form>
      {isLoading && (
        <div className="spinner-border text-warining" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {user?.email && (
        <div className="alert alert-warning" role="alert">
          User Created Successfully!!
        </div>
      )}
      {authError && (
        <div className="alert alert-danger d-flex align-items-center" role="alert">
          <div>{authError}</div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};
export default Login;
