import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./components/contexts/AuthProvider/AuthProvider";
import AddService from "./components/AddService/AddService";
import AddServices from "./components/AddServices/AddServices";
import AllProducts from "./components/AllProducts/AllProducts";
import Purchase from "./components/Purchase/Purchase";
import PrivateRoute from "./components/contexts/AuthProvider/PrivateRoute/PrivateRoute";
import Orders from "./components/Orders/Orders";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/allproducts">
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute path="/products/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
