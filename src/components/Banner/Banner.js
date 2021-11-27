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
            <img
              src="https://www.looks4you.com/wp-content/uploads/2018/11/360_banner5-1024x404.jpg"
              className="w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Amazing Frames And Lenses</h1>
              <button className="btn btn-outline-warning">Shop Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="http://www.sunglassreplicas.com/v/vspfiles/templates/sunglass/images/banner5.jpg"
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
              src="http://cdn.shopify.com/s/files/1/0749/2027/collections/arc.com-collection-sunscreen_1200x630.jpg?v=1615929458"
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
