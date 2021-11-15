import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const {user,logout}=useAuth();
  return (
    < div className='container'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            SunglassWare
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/allproducts">
                  All Products
                </Link>
              </li>
               
              {
                user.email &&  <li class="nav-item">
                <Link class="nav-link" aria-current="page"  to="/dashboard">
                    Dashboard
                  </Link>
                  </li>
              }
              {
                user?.email ?
                 <li className='nav-item'>
               <Link class="nav-link" aria-current="page" onClick={logout}>
                   Logout
                 </Link>
               </li>:
                <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/login">
                  Login
                </Link>
              </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
