import React from "react";
//import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="blue" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" className="text-light navlink">
          Prophecy Generator
        </Navbar.Brand>
        <Navbar.Toggle className="border-none" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 text-light text-center my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/" className="text-light navlink">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="text-light navlink">
              Prophecies
            </Nav.Link>
            <Nav.Link href="#action2" className="text-light navlink">
              About
            </Nav.Link>
            <Nav.Link href="#action2" className="text-light navlink">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
