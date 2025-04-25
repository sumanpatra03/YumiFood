import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import "./MarketingPage.css";

const MarketingPage = () => {
  return (
    <Container fluid className="text-center py-5">
      <h2 className="mb-4 display-4 font-bold">Keep it moving...</h2>
      <p className="mb-5 font-bold">
        BentoBox’s digital marketing and commerce platform helps fast casual
        restaurants establish an online look and feel that’s totally theirs
        while streamlining operations to bring in more revenue.
      </p>

      <Row className="g-4">
        <Col md={4} sm={12}>
          <Card className="h-100 border-0 hover-card">
            <Image
              src="https://images.ctfassets.net/h81st780aesh/7rqg4PUcHtDK2icgAg9IEC/8cfa354a32a803e2b758963ba6627811/Benefit_-_Customized_website.png"
              alt="Customized Website"
              fluid
              className="rounded"
              loading="lazy"
            />
            <Card.Body>
              <Card.Title>Customized Website</Card.Title>
              <Card.Text>
                Increase brand awareness with an expertly designed online
                presence, including easy-to-update features like menus, hours,
                specials, and more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card className="h-100 border-0 hover-card">
            <Image
              src="https://images.ctfassets.net/h81st780aesh/1piZJhpI2ESjFxnGqKTdl7/ceccb1fef8855c2e93ef34ddc5523727/Benefit_-_Online_ordering.png"
              alt="Customized Website"
              fluid
              className="rounded"
              loading="lazy"
            />
            <Card.Body>
              <Card.Title>Online Ordering</Card.Title>
              <Card.Text>
                Accept orders directly through your website, without third-party
                fees.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card className="h-100 border-0 hover-card">
            <Image
              src="https://images.ctfassets.net/h81st780aesh/4UEdYtMu11xFsdToyZfiW1/0d482e9ca10a578c7a924d575a9eb4be/Benefit_-_Pre-order___Catering.png"
              alt="Customized Website"
              fluid
              className="rounded"
              loading="lazy"
            />
            <Card.Body>
              <Card.Title>Pre-order & Catering</Card.Title>
              <Card.Text>
                Take and fulfill bulk orders with one simple dashboard (and zero
                complicated contracts).
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card className="h-100 border-0 hover-card">
            <Image
              src="https://images.ctfassets.net/h81st780aesh/1hq23Y6VZGNZ2Q5k0iiuBz/d1600dd13712ccb529e60c30ecb90c31/stand_out.png"
              alt="Customized Website"
              fluid
              className="rounded"
              loading="lazy"
            />
            <Card.Body>
              <Card.Title>Dine-in Order & Pay</Card.Title>
              <Card.Text>
                Allow on-site diners to order from their devices – and keep
                tables turning without having to staff table service.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card className="h-100 border-0 hover-card">
            <Image
              src="https://images.ctfassets.net/h81st780aesh/5RU3sUrmnNH7zYhUD7kcpw/41c562aab7d57d7ee27c231d453b3da6/Benefit_-_Multiple_locations.png"
              alt="Customized Website"
              fluid
              className="rounded"
              loading="lazy"
            />
            <Card.Body>
              <Card.Title>Multiple Locations</Card.Title>
              <Card.Text>
                As you grow, easily add pages for new locations and update
                information anytime.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card className="h-100 border-0 hover-card">
            <Image
              src="https://images.ctfassets.net/h81st780aesh/55EcmIKs0ng9lhswVwWr4r/63918fa7952ecaf419cf661faa27b935/efficiency.png"
              alt="Customized Website"
              fluid
              className="rounded"
              loading="lazy"
            />
            <Card.Body>
              <Card.Title>Digital Storefront</Card.Title>
              <Card.Text>
                Add another stream of revenue by selling gift cards and
                merchandise through your website.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MarketingPage;
