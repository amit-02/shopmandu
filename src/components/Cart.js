import { useState } from "react";
import React from "react";
import { Modal, Button } from "react-bootstrap";
import Product from "../Views/Product";

const Cart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Items added</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cart-items">
            <h6 className="cart-items-header">cart items</h6>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
