import React from "react";
import { mealData, topPicks } from "../../Data/Data";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const OurFood = () => {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff8e7",
          minHeight: "100vh",
        }}
      >
        <Container
          style={{ flex: 1, paddingTop: "100px", paddingBottom: "50px" }}
        >
        
          <div className="text-center mb-5">
            <h2
              style={{
                color: "#FF5722",
                fontWeight: "bold",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              🔥 Top Picks
            </h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", color: "#777" }}>
              Customers' favorite dishes, handpicked just for you.
            </p>
          </div>

          <Row xs={1} sm={2} md={3} lg={4} className="g-4 mb-5">
            {topPicks.map((item) => (
              <Col key={item.id}>
                <Card
                  className="h-100 shadow-sm hover-card"
                  style={{
                    border: "none",
                    backgroundColor: "#fffefb",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={item.img}
                    alt={item.title}
                    className="rounded"
                    style={{
                      objectFit: "cover",
                      height: "200px",
                      borderRadius: "15px",
                    }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                       {` Name:  
                      ${item.title}`}
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontSize: "16px",
                        color: "#444",
                        fontWeight: "500",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                        {`Price:   
                      ${item.price}`}
                    </Card.Text>
                    <Button
                      variant="dark"
                      className="w-100 mt-3"
                      style={{
                        backgroundColor: "#FF5722",
                        border: "none",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#cc3d00")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#FF5722")
                      }
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          
          <div className="text-center mb-4">
            <h2
              style={{
                color: "#FFB800",
                fontWeight: "bold",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              🍽️ Our Menu
            </h2>
          </div>

          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {mealData.map((meal) => (
              <Col key={meal.id}>
                <Card
                  className="h-100 shadow-sm hover-card"
                  style={{
                    border: "none",
                    backgroundColor: "#fff",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={meal.image}
                    alt={meal.name}
                    className="rounded-circle mx-auto mt-3"
                    style={{
                      objectFit: "cover",
                      height: "200px",
                      width: "200px",
                      border: "4px solid #FFB800",
                    }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {meal.name}
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontSize: "16px",
                        color: "#444",
                        fontWeight: "500",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {meal.price}
                    </Card.Text>
                    <Button
                      variant="dark"
                      className="w-100 mt-3"
                      style={{
                        backgroundColor: "#FFB800",
                        border: "none",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#cc9300")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#FFB800")
                      }
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default OurFood;
