import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo.png"
              width="180px"
              height="45px"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
