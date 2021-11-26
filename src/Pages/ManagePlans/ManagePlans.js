import React from "react";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./AllPlans.css";

const ManagePlans = () => {
  const [plans, setPlans] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`https://themepark-server.herokuapp.com/allorders`)
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, [control, plans]);

  const deletePlan = (id) => {
    fetch(`https://themepark-server.herokuapp.com/deleteplan?id=${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setControl(!control);
        } else {
          setControl(false);
        }
      });
  };

  const confirmOrder = (id, i) => {
    const plan = plans[i];
    const updatedOrder = {
      name: plan.name,
      rideName: plan.rideName,
      imgLink: plan.imgLink,
      email: plan.email,
      status: "Confirmed",
      rideFare: plan.rideFare,
    };

    fetch(`https://themepark-server.herokuapp.com/confirmplan/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedOrder),
    })
      .then((res) => res.json())
      .then((data) => {});
    window.location.reload();
  };

  return (
    <div className="my-5">
      <h1>All Plans</h1>
      <div className="container mt-5 mb-28rem">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SL</th>
              <th>Your Name</th>
              <th>Ride Name</th>
              <th>Ride Fare</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, i) => (
              <tr key={plan._id}>
                <td>{i}</td>
                <td>{plan.name}</td>
                <td>{plan.rideName}</td>
                <td>{plan.rideFare}</td>
                <td>{plan.status}</td>
                <td>
                  <i
                    className="fas fa-check-square update-btn"
                    onClick={() => confirmOrder(plan._id, i)}
                  ></i>
                  <i
                    className="fas fa-trash-alt drop-btn"
                    onClick={() => deletePlan(plan._id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManagePlans;
