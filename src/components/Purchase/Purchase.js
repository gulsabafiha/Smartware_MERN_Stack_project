import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import "./Purchase.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Purchase = () => {
  const { productId } = useParams();
  const [services, setServices] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data)});
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/orders", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedID) {
          alert("Ordered service successfully!");
          reset();
        }
      });
  };

  return (
    <div>
      <Header></Header>
      <div className="booking-container m-5">
        <div className="offer-container">
          <h2>Details of the Offering you Query:{services.Name}</h2>
          <img src={services.img} height="100px" className="m-5" />
          <h3>{services.Price}</h3>
          <p>{services.description}</p>
        </div>

        <div className="form-container">
          <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
           
            <input defaultValue={services.Name} {...register("Servicename")} />
            <input defaultValue={services.Price} {...register("price")} />
            <input defaultValue={services.img} {...register("img")}  />
            <input
              defaultValue={user.email}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="error">This field is required</span>
            )}
            <input
              placeholder="Address"
              defaultValue=""
              {...register("address")}
            />
            <input placeholder="City" defaultValue="" {...register("city")} />
            <input
              placeholder="phone number"
              defaultValue=""
              {...register("phone")}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Purchase;
