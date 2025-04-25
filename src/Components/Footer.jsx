import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-black text-white py-5 mt-5">
      <Container>
        <Row>
         
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <h2 className="font-weight-bold mb-3" style={{ fontSize: "30px" }}>
              Yami<span className="text-warning">Food</span>
            </h2>
            <p className="" style={{ fontSize: "20px", color:"gray" }}>
              © 2024 Bundl Technologies Pvt. Ltd
            </p>
          </Col>

          <Col xs={6} md={2} className="mb-4 mb-md-0">
            <h2 className="font-weight-bold mb-3" style={{ fontSize: "20px" }}>
              Company
            </h2>
            <p className="" style={{ fontSize: "20px", color:"gray" }}>About</p>
            <p className="" style={{ fontSize: "20px", color:"gray" }}>Careers</p>
            <p className="" style={{ fontSize: "20px", color:"gray" }}>Team</p>
          </Col>

         
          <Col xs={6} md={2} className="mb-4 mb-md-0">
            <h2 className="font-weight-bold mb-3" style={{ fontSize: "25px" }}>
              Contact us
            </h2>
            <p className="" style={{ fontSize: "20px", color:"gray" }}>Help & Support</p>
            <p className="" style={{ fontSize: "20px", color:"gray" }}>Partner with us</p>
            <p className="" style={{ fontSize: "20px", color:"gray" }}>Ride with us</p>
          </Col>

          {/* Legal Section */}
          <Col xs={6} md={2} className="mb-4 mb-md-0">
            <h2 className="font-weight-bold mb-3" style={{ fontSize: "25px" }}>
              Legal
            </h2>
            <p className="" style={{ fontSize: "20px", color:"gray" }}>Terms & Conditions</p>
            <p className="" style={{ fontSize: "20px", color:"gray" }}>Cookie Policy</p>
            <p className="" style={{ fontSize: "20px", color:"gray" }}>Privacy Policy</p>
            <p className="" style={{ fontSize: "20px", color:"gray" }}>Investor Relations</p>
          </Col>

          {/* Delivery Locations Section */}
          <Col xs={6} md={3} className="mb-4 mb-md-0">
            <h2 className="font-weight-bold mb-3" style={{ fontSize: "25px" }}>
              We deliver to:
            </h2>
            <p className="" style={{ fontSize: "20px", color:"gray" }}>Bangalore</p>
            <p className="" style={{ fontSize: "20px", color:"gray" }}>Gurgaon</p>
            <p className="" style={{ fontSize: "20px", color:"gray" }}>Hyderabad</p>
            <p className="" style={{ fontSize: "20px", color:"gray" }}>Mumbai</p>
            <p className="" style={{ fontSize: "20px", color:"gray" }}>Delhi</p>
            <p className="" style={{ fontSize: "20px", color:"gray" }}>Pune</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
