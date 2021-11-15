import React from "react";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";

const DashReview = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    axios
      .post("https://rocky-ridge-27359.herokuapp.com/review", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedID) {
          alert("Ordered service successfully!");
          reset();
        }
      });
  };

  return (
    <div className="content">
      <div className="add-service">
        <h2>Add Reviews</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <br />
          <input
            {...register("rating", { required: true })}
            placeholder="rating"
          />
          <br />
          <input {...register("description")} placeholder="short-description" />
          <input className="mt-3" type="Submit" />
        </form>
      </div>
    </div>
  );
};
export default DashReview;
