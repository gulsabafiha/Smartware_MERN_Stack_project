import React, { useEffect, useState } from "react";
import AllProduct from "../AllProduct/AllProduct";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://rocky-ridge-27359.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <h2 className="m-5">Our Products</h2>
      <div className="service-container ">
        {products.map((product) => (
          <AllProduct key={product._id} product={product}></AllProduct>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};
export default AllProducts;
