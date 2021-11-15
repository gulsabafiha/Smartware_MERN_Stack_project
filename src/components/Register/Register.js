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
          <div class="m-5 row">
            <label for="inputEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input
                type="email"
                name="email"
                onChange={handleOnchange}
                class="form-control"
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
          </div>
          <div class="m-5 row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Retype Password
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                name="password2"
                onChange={handleOnchange}
                class="form-control"
                id="inputPassword"
              />
            </div>
            <div class="col-sm-10">
              <input
                type="submit"
                class="btn btn-outline-warning"
                value="Register"
              />
            </div>
            <div class="col-sm-10">
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

export default Register;
