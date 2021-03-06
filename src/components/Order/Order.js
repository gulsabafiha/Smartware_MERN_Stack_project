import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Order.css";

const Order = ({ order, orders, setOrders }) => {
  const { name, email, service, _id } = order;
  const { serviceId } = useParams();

  const [services, setServices] = useState([]);
  console.log(services.Name);
  useEffect(() => {
    fetch(`https://rocky-ridge-27359.herokuapp.com/products/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://rocky-ridge-27359.herokuapp.com/orders/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("hitted", data);
          if (data.deletedCount) {
            alert("deleted succesfully");
            const reamaining = orders.filter((service) => service._id === id);
            setOrders(reamaining);
          }
        });
    }
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div>
        <h5 className="card-text">{service}</h5>
        <h6 className="card-text">{name}</h6>
        <h6>{email}</h6> <br />
        <button
          className="btn btn-outline-warning"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Order;
