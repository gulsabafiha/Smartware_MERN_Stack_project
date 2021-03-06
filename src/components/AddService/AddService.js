import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddService.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://rocky-ridge-27359.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedID) {
          alert("Added service successfully!");
          reset();
        }
      });
  };

  return (
    <div>
      <Header></Header>
      <div className="add-service">
        <h2>Add service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("Name", { required: true, maxLength: 20 })}
            placeholder=" Name"
          />{" "}
          <br />
          <input
            {...register("Price", { required: true, maxLength: 20 })}
            placeholder=" Price"
          />{" "}
          <br />
          <input {...register("description")} placeholder="short-description" />
          <input {...register("img")} placeholder="Img URL" />
          <input className="mt-3" type="submit" />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default AddService;
