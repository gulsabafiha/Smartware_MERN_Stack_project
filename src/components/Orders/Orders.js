import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Order from "../Order/Order";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://rocky-ridge-27359.herokuapp.com/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  return (
    <div className="content">
      <div className="order">
        {orders.map((order) => (
          <Order
            key={order._id}
            order={order}
            orders={orders}
            setOrders={setOrders}
          ></Order>
        ))}
      </div>
    </div>
  );
};
export default Orders;
