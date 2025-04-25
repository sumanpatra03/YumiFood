import React from "react";
import { Container, Carousel, Card, Image } from "react-bootstrap";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    feedback:
      "Absolutely loved the food! The ambiance is cozy and the service is excellent. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Smith",
    feedback:
      "The flavors were authentic and the presentation was top-notch. I’ll definitely be coming back!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Sophia Lee",
    feedback:
      "A hidden gem! The desserts are out of this world and the staff made us feel like family.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{ backgroundColor: "#fff8e7", minHeight: "100vh" }}
    >
      <Container>
        <h2
          className="text-center mb-5 fw-bold"
          style={{ color: "#FFB800", fontFamily: "'Poppins', sans-serif" }}
        >
          What Our Customers Say
        </h2>

        <Carousel indicators={false} fade interval={5000}>
          {testimonials.map((testimonial) => (
            <Carousel.Item key={testimonial.id}>
              <Card
                className="mx-auto shadow-lg p-4"
                style={{
                  maxWidth: "700px",
                  border: "none",
                  backgroundColor: "#fff6db",
                  borderRadius: "20px",
                }}
              >
                <div className="d-flex flex-column align-items-center text-center">
                  <Image
                    src={testimonial.image}
                    roundedCircle
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      border: "4px solid #FFB800",
                    }}
                    className="mb-3"
                  />
                  <h5 className="fw-bold mb-1">{testimonial.name}</h5>
                  <p
                    className="text-muted mt-2"
                    style={{ fontSize: "16px", fontFamily: "'Poppins', sans-serif" }}
                  >
                    "{testimonial.feedback}"
                  </p>
                </div>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </Container>
  );
};

export default Testimonials;
