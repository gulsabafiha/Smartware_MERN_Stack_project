import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const {user,logout}=useAuth();
  return (
    < div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>
            Smartware
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link active fw-bold" aria-current="page" to="/allproducts">
                  Explore
                </Link>
              </li>
               
              {
                user.email &&  <li className="nav-item">
                <Link className="nav-link active" aria-current="page"  to="/dashboard">
                    Dashboard
                  </Link>
                  </li>
              }
              {
                user?.email ?
                 <li className='nav-item'>
               <Link className="nav-link " aria-current="page" onClick={logout}>
                   Logout
                 </Link>
               </li>:
                <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/login">
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
