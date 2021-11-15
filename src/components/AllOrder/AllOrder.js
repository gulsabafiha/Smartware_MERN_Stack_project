import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const AllOrder = ({ order, orders, setOrders }) => {
  const { name, email, service, _id } = order;
  const [services, setServices] = useState([]);
  const { serviceId } = useParams();

  useEffect(() => {
    fetch(`https://rocky-ridge-27359.herokuapp.com/products/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://rocky-ridge-27359.herokuapp.com/orders/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("deleted succesfully");
            const reamaining = orders.filter((service) => service._id !== id);
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
        <h6>{email}</h6>
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

export default AllOrder;
