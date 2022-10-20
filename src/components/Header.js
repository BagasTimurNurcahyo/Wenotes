import React from "react";
import Swal from "sweetalert2";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const history = useNavigate();
  const location = useLocation();
  const HandleLogout = () => {
    Swal.fire("Logout berhasil");
    history("/");
  };
  return (
    <>
      <Navbar bg="light">
        <Container className="right_data">
          <Navbar.Brand href="#home">
            <img
              src="/logo.png"
              width="180px"
              height="45px"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
          {location.pathname === "/notes" && (
            <Button onClick={HandleLogout} variant="primary">
              Logout
            </Button>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
