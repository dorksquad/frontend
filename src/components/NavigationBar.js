import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect inverse >
    <Container className="d-flex justify-content-center" inverse>
      <Nav className="me-auto m-auto gray radial">
        <Nav.Link href="#gallery">gallery</Nav.Link>
        <Navbar.Brand className="m-auto pipeSide" href="#home">Dork Squad</Navbar.Brand>
        <Nav.Link href="#contact">contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavigationBar;
