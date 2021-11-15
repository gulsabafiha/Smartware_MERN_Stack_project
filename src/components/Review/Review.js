import React from "react";
import Rating from "@mui/material/Rating";
import "./Review.css";

const Review = ({ review, setReviews }) => {
  const { description, rating, email } = review;

  return (
    <div>
      <div className="col">
        <div className="card1">
          <div className="face front-face">
            <div className="pt-3  name"> {email} </div>
          </div>
          <div className="face back-face">
            {" "}
            <span className="fas fa-quote-left"></span>
            <div className="testimonial"> {description} </div>{" "}
            <span className="fas fa-quote-right"></span>
            <Rating
              name="simple-controlled"
              value={rating}
              readOnly
              onChange={(event, newValue) => {
                setReviews(newValue);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
