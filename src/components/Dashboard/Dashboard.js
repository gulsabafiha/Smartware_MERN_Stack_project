import React from "react";
import useAuth from "../hooks/useAuth";
import Orders from "../Orders/Orders";
import Pay from "../Pay/Pay";
import "./Dashboard.css";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import DashHome from "../DashHome/DashHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import DashReview from "../DashReview/DashReview";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import AddServices from "../AddServices/AddServices";
import Header from "../Header/Header";
import ManageProduct from "../ManageProduct/ManageProduct";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const {  logout, admin } = useAuth();
  return (
    <div>
      <Header></Header>
      <div className="sidebar">
        <Link className="active" to={`${url}`}>
          Dashboard
        </Link>

        {admin ? (
          <div>
            {" "}
            <Link
              className="nav-link"
              aria-current="page"
              to={`${url}/manageallorders`}
            >
              Manage All Orders
            </Link>
            <Link className="nav-link" aria-current="page" to={`${url}/addproduct`}>
              Add Product
            </Link>
            <Link
              className="nav-link"
              aria-current="page"
              to={`${url}/manageproduct`}
            >
              Manage Products
            </Link>
            <Link className="nav-link" aria-current="page" to={`${url}/makeadmin`}>
              Make Admin
            </Link>
          </div>
        ) : (
          <div>
            <Link className="nav-link" aria-current="page" to={`${url}/orders`}>
              My Order
            </Link>
            <Link className="nav-link" aria-current="page" to={`${url}/pay`}>
              Pay
            </Link>
            <Link className="nav-link" aria-current="page" to={`${url}/review`}>
              Review
            </Link>
          </div>
        )}

        <Link className="nav-link" aria-current="page" onClick={logout}>
          Logout
        </Link>
      </div>
      <div className='content'>
      <Switch>
        <Route exact path={path}>
          <DashHome></DashHome>
        </Route>
        <Route path={`${path}/makeadmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/pay`}>
          <Pay></Pay>
        </Route>
        <Route path={`${path}/orders`}>
          <Orders></Orders>
        </Route>
        <Route path={`${path}/manageallorders`}>
          <ManageAllOrder></ManageAllOrder>
        </Route>
        <Route path={`${path}/addproduct`}>
          <AddServices></AddServices>
        </Route>
        <Route path={`${path}/review`}>
          <DashReview></DashReview>
        </Route>
        <Route path={`${path}/manageproduct`}>
         <ManageProduct></ManageProduct>
        </Route>
      </Switch>
      </div>
     
    </div>
  );
};

export default Dashboard;
