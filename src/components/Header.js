import React from "react";
import { Container, Navbar, Link, Nav, Badge } from "react-bootstrap";

import Cart from "./Cart";

const Header = (props) => {
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
          <Cart
            cartItem={props.cartItem}
            getCartValue={props.getCartValue}
            handleAddToCart={props.handleAddToCart}
            handleDelete={props.handleDelete}
          />
          <Badge bg="danger" style={{ height: 20 }}>
            {props.cartItem.length}
          </Badge>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
