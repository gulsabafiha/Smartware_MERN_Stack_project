import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState([]);
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newloginData = { ...loginData };
    newloginData[field] = value;
    console.log(newloginData);
    setLoginData(newloginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your Password did not match");
    }
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
  };

  return (
    <div>
      <Header></Header>
      <h1 className="m-5">Register</h1>
      {!isLoading && (
        <form onSubmit={handleLoginSubmit}>
          <div className="m-5 row">
            <label for="inputEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                name="email"
                onChange={handleOnchange}
                className="form-control"
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
          </div>
          <div className="m-5 row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Retype Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                name="password2"
                onChange={handleOnchange}
                className="form-control"
                id="inputPassword"
              />
            </div>
            <div className="col-sm-10">
              <input
                type="submit"
                className="btn btn-outline-warning"
                value="Register"
              />
            </div>
            <div className="col-sm-10">
              <Link to="/login">
                <button className="btn btn-link">
                  Already Registerd? Please Login
                </button>
              </Link>
            </div>
          </div>
        </form>
      )}
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

export default Register;
