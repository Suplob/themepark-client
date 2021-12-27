import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Rides.css";

const Rides = () => {
  const [rides, setRides] = useState([]);
  useEffect(() => {
    fetch("https://themepark-server.herokuapp.com/rides")
      .then((res) => res.json())
      .then((data) => setRides(data));
  }, []);

  return (
    <div className="bg-light py-5">
      <h1>Our Popular Rides</h1>
      <div className="row container mx-auto" id="card-wrapper ">
        {rides.map((ride) => (
          <div className="col-12 col-md-6 col-lg-4" id="rides" key={ride._id}>
            <div className="card" key={ride._id}>
              <img src={ride.imgLink} alt="Ride" style={{ width: "100%" }} />
              <div className="container">
                <h4>
                  <b>{ride.rideName}</b>
                  <br />
                  <p className="mt-3">${ride.rideFare}</p>
                </h4>
                <p>{ride.description}</p>
              </div>
              <Link to={`/placeorder/${ride._id}`}>
                <button className="btn-regular">Plan Ride</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rides;
