import React from "react";
import Rating from "@mui/material/Rating";
import "./Review.css";

const Review = ({ review, setReviews }) => {
  const { description, rating, email } = review;

  return (
    <div>
      <div class="col">
        <div class="card1">
          <div class="face front-face">
            <div class="pt-3  name"> {email} </div>
          </div>
          <div class="face back-face">
            {" "}
            <span class="fas fa-quote-left"></span>
            <div class="testimonial"> {description} </div>{" "}
            <span class="fas fa-quote-right"></span>
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
