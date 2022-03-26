import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import "../NavVar/NavVar.css";

const NavVar = () => {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <span className="fw-bold " style={{ color: "#e24fe4" }}>
                Public library
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home">
                  <span className="fw-bold" style={{ color: "#e24fe4" }}>
                    Home
                  </span>
                </Nav.Link>
                <Nav.Link href="#home">
                  <span className="fw-bold" style={{ color: "#e24fe4" }}>
                    About
                  </span>
                </Nav.Link>
                <Nav.Link href="#home">
                  <span className="fw-bold" style={{ color: "#e24fe4" }}>
                    More
                  </span>
                </Nav.Link>
                <Nav.Link href="#home">
                  <span className="fw-bold" style={{ color: "#e24fe4" }}>
                    Connect Us
                  </span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default NavVar;