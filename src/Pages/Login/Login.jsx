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
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { auth } from "../../Auth/Auth";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    // console.log(userData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();

    try {
      await auth.signIn(userData.email, userData.password);
      toast.success("Login successful!");
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
    }

    // }

    // axiosInstance
    //   .get(`/${api}?email=${userData.email}`)
    //   .then((res) => {
    //     // console.log(res)
    //     if (res.data.length === 0) {
    //       toast.error("You are not a user, please sign up first!");
    //     } else {
    //       const user = res.data[0];
    //       // console.log(user)
    //       if (user.password === userData.password) {
    //         toast.success(`Welcome back, ${user.name}!`);
    //         setTimeout(() => {
    //           navigate("/home");
    //         }, 1000);
    //       } else {
    //         toast.error("Invalid password!");
    //       }
    //     }
    //   })
    // .catch((err) => {
    //   console.error("Error:", err);
    //   toast.error("An error occurred. Please try again later.");
    // });
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "#fef9f4",
        minHeight: "100vh",
        backgroundImage:
          "url('https://img.freepik.com/free-photo/top-view-food-frame_23-2148723454.jpg')",
      }}
    >
      <Card
        className="shadow-lg"
        style={{
          maxWidth: "900px",
          width: "100%",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <Row className="g-0">
          <Col md={6} className="d-none d-md-block">
            <Image
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=870&q=80"
              alt="Food Login Illustration"
              fluid
              style={{ height: "100%", objectFit: "cover" }}
            />
          </Col>

          {/* Form Side */}
          <Col md={6} className="p-4 ">
            <Card.Body>
              <h2
                className="fw-bold text-center mb-4"
                style={{ color: "#d35400" }}
              >
                Welcome Back!
              </h2>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4 input-group">
                  <span className="input-group-text bg-light">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4 input-group">
                  <span className="input-group-text bg-light">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <Form.Control
                    type="password"
                    placeholder="Your Password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="warning"
                  size="lg"
                  className="w-100 text-white fw-bold"
                >
                  Login
                </Button>
              </Form>

              <p className="text-center mt-3">
                Don’t have an account?{" "}
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => navigate("/")}
                >
                  Sign up
                </Button>
              </p>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  );
};

export default Login;
