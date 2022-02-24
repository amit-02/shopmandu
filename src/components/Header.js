import React from "react";
import { Container, Navbar, Link, Nav, Badge } from "react-bootstrap";

import Cart from "./Cart";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <a>Shopmandu</a>
        </Navbar.Brand>
        <Nav>
          <Nav.Link>
            <a>Home</a>
          </Nav.Link>
          <Cart />
          <Badge>{10}</Badge>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
