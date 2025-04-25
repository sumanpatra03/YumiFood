import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: "#fff8e7",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container
          className="mt-5"
          style={{
            flex: "1",
            paddingTop: "75px",
            paddingBottom: "50px",
          }}
        >
          <div className="text-center">
            <h2
              className="display-4 fw-bold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Driving the force of{" "}
              <span
                style={{
                  color: "#fbc531",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                assortment
              </span>
            </h2>
            <p
              className="lead text-muted mt-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              For over a decade now, we’ve been empowering our customers in
              discovering new tastes and experiences across countries. By
              putting together meticulous information for our customers, we
              enable them to make an informed choice.
            </p>
          </div>

          <Row className="align-items-center my-5">
            <Col md={6} className="mb-4 mb-md-0">
              <h3 className="fw-bold mb-4">Who are we?</h3>
              <p
                className="text-muted"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Launched in 2010, our technology platform connects customers,
                restaurant partners, and delivery partners, serving their
                multiple needs. Customers use our platform to search and
                discover restaurants, read and write customer-generated reviews
                and view and upload photos, order food delivery, book a table,
                and make payments while dining out at restaurants.
                <br />
                <br />
                On the other hand, we provide restaurant partners with
                industry-specific marketing tools that enable them to engage and
                acquire customers to grow their business while also providing a
                reliable and efficient last-mile delivery service. We also
                operate a one-stop procurement solution, Hyperpure, which
                supplies high-quality ingredients and kitchen products to
                restaurant partners. We also provide our delivery partners with
                transparent and flexible earning opportunities.
              </p>
            </Col>
            <Col md={6}>
              <Image
                src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp"
                alt="Who are we"
                fluid
                rounded
              />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
