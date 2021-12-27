import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const [ride, setRide] = useState(null);
  const { users } = useAuth();

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://themepark-server.herokuapp.com/ride/${id}`)
      .then((res) => res.json())
      .then((data) => setRide(data));
  }, [id]);

  const order = {
    name: users?.displayName,
    rideName: ride?.rideName,
    imgLink: ride?.imgLink,
    email: users?.email,
    status: "pending",
    rideFare: ride?.rideFare,
  };

  const history = useHistory();

  const confirmOrder = () => {
    fetch("https://themepark-server.herokuapp.com/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    });
    alert("order confirmed");
    history.push("/home");
  };

  return (
    <section className="bg-light ride-wrapper d-flex align-items-center">
      {ride === null ? (
        <div></div>
      ) : (
        <div className="container mt-5">
          <img src={ride.imgLink} alt="" />
          <h1>{ride.rideName}</h1>
          <h3>{ride.rideFare}</h3>
          <p className="text-secondary">{ride.description}</p>
          <button className="btn-regular" onClick={confirmOrder}>
            Order Plan
          </button>
        </div>
      )}
    </section>
  );
};

export default PlaceOrder;
