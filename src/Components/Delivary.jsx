/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const Delivary = () => {
  return (
    <div className="py-5 mt-4">
      <Container>
        <h2
          className="text-warning text-center mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Quick App Delivery
        </h2>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              fluid
              src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
              alt="App Image"
            />
          </Col>
          <Col xs={12} md={6}>
            <p
              className="text-success fw-bold fs-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Get the App
            </p>
            <h2
              className="fw-bold display-5 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Limitless Convenience on Demand
            </h2>
            <Button
              variant="dark"
              size="lg"
              className="w-100 w-md-auto"
              style={{ maxWidth: "200px" }}
            >
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Delivary;
