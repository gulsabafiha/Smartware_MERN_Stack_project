import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);
  return (
    <div>
        <h2 className='m-5'>Reviews Form Our Valuable Customers</h2>
      <div class="container-review">
        {reviews.map((review) => (
          <Review review={review} setReviews={setReviews}></Review>
        ))}
      </div>
    </div>
  );
};
export default Reviews;
