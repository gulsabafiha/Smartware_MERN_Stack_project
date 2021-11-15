import React from 'react';
import { Link } from 'react-router-dom';

const AllProduct=({product})=>{
    const { img, description, Name, _id ,Price} = product;

    return(
        <div className="mx-auto">
      <div className="card shadow" style={{ width: "18rem" }}>
        <img src={img} class="card-img-top"  alt="" />
        <div class="card-body">
          <h5 class="card-title">{Name}</h5>
          <h6 class="card-title">{Price}</h6>
          
          <p class="card-text">{description}</p>
          <Link to={`/products/${_id}`}>
            <button className="btn btn-outline-warning">See Detail</button>
          </Link>
        </div>
      </div>
    </div>
    )
}
export default AllProduct;