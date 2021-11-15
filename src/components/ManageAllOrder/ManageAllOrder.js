import React, { useEffect, useState } from "react";
import AllOrder from "../AllOrder/AllOrder";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://rocky-ridge-27359.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="content">
      <div className="order">
        {orders.map((order) => (
          <AllOrder
            key={order._id}
            order={order}
            orders={orders}
            setOrders={setOrders}
          ></AllOrder>
        ))}
      </div>
    </div>
  );
};
export default ManageAllOrder;
