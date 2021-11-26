import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

const RequestRide = () => {
  const { users } = useAuth();

  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.email = users?.email;
    fetch(`https://themepark-server.herokuapp.com/addride`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("Ride Request Submitted Successfully");
    history.push("/home");
  };

  return (
    <div className="wrapper fadeInDown mb-6rem">
      <div id="formContent">
        <h2 className="active"> Request ride </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue={users.displayName}
            placeholder="name"
            type="text"
            className="fadeIn second"
            {...register("name", { required: true })}
          />
          <input
            placeholder="Ride Name"
            type="text"
            className="fadeIn second"
            {...register("rideName", { required: true })}
          />
          <input
            placeholder="Ride Fare"
            type="number"
            className="fadeIn second"
            {...register("rideFare", { required: true })}
          />
          <input
            placeholder="image link of the ride"
            type="text"
            className="fadeIn second"
            {...register("imgLink", { required: true })}
          />
          <input
            placeholder="short description"
            type="text"
            className="fadeIn second"
            {...register("description", { required: true })}
          />

          {errors.exampleRequired && (
            <span className="text-danger">This field is required</span>
          )}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default RequestRide;
