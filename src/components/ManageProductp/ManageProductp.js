import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ManageProductp = ({ product,setProducts }) => {
  const { description, Name, _id, Price } = product;
  const { serviceId } = useParams();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/products/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("deleted succesfully");
            const reamaining = orders.filter((service) => service._id !== id);
            setProducts(reamaining);
          }
        });
    }
  };

  return (
    <div className='content'>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Name}</td>
            <td>{Price}</td>
            <td>{description}</td>
            <td><button
              className="btn btn-outline-warning"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ManageProductp;
