import React from "react";
import "./Banner.css";


const Banner = () => {
 
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src='https://i.ibb.co/VSj07Kh/f-01.jpg' className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Amazing Frames And Lenses</h1>
              <button className="btn btn-outline-warning">Shop Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co/6Ngm1GK/13-04.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Amazing Frames And Lenses</h1>
              <button className="btn btn-outline-warning">Shop Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.longeoptical.com/wp-content/uploads/2017/09/womens-eyeglasses-banner.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Amazing Frames And Lenses</h1>
              <button className="btn btn-outline-warning">Shop Now</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default Banner;
