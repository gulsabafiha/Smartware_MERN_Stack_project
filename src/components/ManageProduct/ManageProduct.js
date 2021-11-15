import React, { useEffect, useState } from "react";
import ManageProductp from "../ManageProductp/ManageProductp";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://rocky-ridge-27359.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2 className="m-5">Our Products</h2>
      <div className="service-container ">
        {products.map((product) => (
          <ManageProductp
            key={product._id}
            product={product}
            setProducts={setProducts}
          ></ManageProductp>
        ))}
      </div>
    </div>
  );
};
export default ManageProduct;
