import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../Auth/Auth";



function Signup() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullname, email, password, confirmPassword } = formData;

    if (!fullname || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      await auth.signUp(email, password, fullname);
      toast.success("Registered successfully! Check your email.");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };


  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center p-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        minHeight: "100vh",
        backgroundPosition: "center",
      }}
    >
      <Card
        style={{ borderRadius: "25px", maxWidth: "900px", width: "100%" }}
        className="shadow-lg"
      >
        <Card.Body className="p-4">
          <Row>
            {/* Form Column */}
            <Col
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <h1
                className="text-center fw-bold mb-4 mt-2"
                style={{ color: "#d35400" }}
              >
                Join the Feast!
              </h1>

              <Form className="w-100 px-4" onSubmit={handleSubmit}>
                <Form.Group className="mb-4 input-group">
                  <span className="input-group-text bg-light">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-4 input-group">
                  <span className="input-group-text bg-light">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-4 input-group">
                  <span className="input-group-text bg-light">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-4 input-group">
                  <span className="input-group-text bg-light">
                    <FontAwesomeIcon icon={faKey} />
                  </span>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="warning"
                  size="lg"
                  className="w-100 mb-3 fw-bold text-white"
                >
                  Register
                </Button>

                <p className="text-center">
                  Already a member?{" "}
                  <Button
                    variant="link"
                    className="p-0"
                    onClick={() => navigate("/login")}
                  >
                    Log in
                  </Button>
                </p>
              </Form>
            </Col>

            {/* Image Column */}
            <Col
              md={12}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80"
                fluid
                rounded
                style={{ borderRadius: "20px" }}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  );
}

export default Signup;
