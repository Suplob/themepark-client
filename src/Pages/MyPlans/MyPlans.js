import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const MyPlans = () => {
  const [plans, setPlans] = useState([]);
  const [control, setControl] = useState(false);

  const { users } = useAuth();
  const { email } = users;

  useEffect(() => {
    fetch(`https://themepark-server.herokuapp.com/order?email=${email}`)
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, [control]);

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

  return (
    <div className="my-5">
      <h1>My Plans</h1>
      <div className="container mt-5 mb-28rem">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SL</th>
              <th>Your Name</th>
              <th>Ride Name</th>
              <th>Ride Fare</th>
              <th>Status</th>
              <th>Delete</th>
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

export default MyPlans;
