import React from 'react';
import { Link } from 'react-router-dom';

const AllProduct=({product})=>{
    const { img, description, Name, _id ,Price} = product;

    return(
        <div className="mx-auto">
      <div className="card shadow" style={{ width: "18rem" }}>
        <img src={img} class="card-img-top"  alt="" />
        <div className="card-body">
          <h5 className="card-title">{Name}</h5>
          <h6 className="card-title">{Price}</h6>
          
          <p className="card-text">{description}</p>
          <Link to={`/products/${_id}`}>
            <button className="btn btn-outline-warning">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
    )
}
export default AllProduct;