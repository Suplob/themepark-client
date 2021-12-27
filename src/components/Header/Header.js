import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import "./Header.css";
import { useEffect } from "react";

const Header = () => {
  const { users, logOut } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");

  const toggleClass = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    setName(users.displayName);
  }, [users]);

  return (
    <div>
      <Navbar
        variant="light"
        className="navbar"
        expand="md"
        fixed="top"
        style={{ position: "fixed", backgroundColor: "white" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Theme Park
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex align-items-center">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              {users.email ? (
                <>
                  <Nav.Link as={Link} to="/myplans">
                    My Plans
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manageplans">
                    Manage Plans
                  </Nav.Link>
                  <Nav.Link as={Link} to="/requestride">
                    Request Ride
                  </Nav.Link>
                  <Nav.Link>{users.displayName}</Nav.Link>

                  <Nav.Link className="float-end">
                    <img
                      src={users.photoURL}
                      className="header-img"
                      alt=""
                      onClick={toggleClass}
                    />
                  </Nav.Link>

                  <div className={modalOpen ? "d-block" : "d-none"}>
                    <div className="custom-modal d-flex flex-column align-items-center">
                      <span className="fw-bold">{users.displayName}</span>
                      ---------------------
                      <br />
                      <Link
                        to="/myplans"
                        className="link-default"
                        onClick={() => setModalOpen(false)}
                      >
                        <span onClick={() => setModalOpen(false)}>
                          My Plans
                        </span>
                        <br />
                        <span onClick={logOut}>Log Out</span>
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
