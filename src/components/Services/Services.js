import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import './Services.css';

const Services = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2 className="m-5">Our Products</h2>
      <div className="service-container ">
        {products?.slice(0,6).map((sproduct) => (
          <Service key={sproduct._id} sproduct={sproduct}></Service>
        ))}
      </div>
    </div>
  );
};
export default Services;