import React from 'react';
import { Link } from 'react-router-dom';


const Service=({sproduct})=>{
    const{img,description,Name,_id}=sproduct; 

    return(
      <div className='mx-auto' >
      <div className="card shadow" style={{width: '23rem'}}>
        <img src={img} style={{height:'183px',width:'366px'}} alt="" />
        <div className="card-body">
          <h5 className="card-title">{Name}</h5>
          <p className="card-text">
           {description}
          </p>
          <Link to={`/products/${_id}`}>
            <button className='btn btn-outline-warning mb-5'>Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
    )
}
export default Service;