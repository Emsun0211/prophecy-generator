import React from "react";
//import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" className="text-blue-500 navlink">
          Prophecy Generator
        </Navbar.Brand>
        <Navbar.Toggle className="border-none" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 text-blue-500 text-center my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/" className="text-blue-500 navlink">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="text-blue-500 navlink">
              Prophecies
            </Nav.Link>
            <Nav.Link href="#action2" className="text-blue-500 navlink">
              About
            </Nav.Link>
            <Nav.Link href="#action2" className="text-blue-500 navlink">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
