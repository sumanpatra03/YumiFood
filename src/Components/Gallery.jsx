import React from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";

const galleryImages = [
  "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1598476441279-08845d695997?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
];

const foodImages = [
  "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
  "https://plus.unsplash.com/premium_photo-1699293238732-c2fde08b4923?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
  "https://images.unsplash.com/photo-1544510808-91bcbee1df55",
  "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9",
];

const Gallery = () => {
  return (
    <Container
      fluid
      className="py-3"
      style={{ backgroundColor: "#fff8e7", minHeight: "100vh" }}
    >
      <Container>
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#FFB800" }}>
          Our Gallery
        </h2>

        <Carousel className="mb-5 shadow" fade>
          {galleryImages.map((img, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100 rounded"
                src={img}
                alt={`Slide ${idx}`}
                style={{ height: "600px", objectFit: "cover" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Grid Gallery Section */}
        <Row xs={1} sm={2} md={3} lg={3} className="g-4">
          {foodImages.map((img, idx) => (
            <Col key={idx}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={img}
                  alt={`Food ${idx}`}
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Gallery;
