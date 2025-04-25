import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Button,
  Dropdown,
} from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../Supabase/Supabase";
import "./Header.css";

const Header = () => {
  const [sideNav, setSideNav] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Get logged in user on mount
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) setUser(data.user);
    };

    fetchUser();

    // Optional: Listen to auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/login");
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand className="mx-auto fw-bold header-brand">
          Yumi<span className="text-warning">Food</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          as={Button}
          className="border-0 bg-transparent p-0"
          onClick={() => setSideNav(true)}
        >
          <GiHamburgerMenu size={25} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
          <Nav className="ms-auto d-flex align-items-center gap-4 header-nav">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
            <Nav.Link as={Link} to="/Ourfood">Our Food</Nav.Link>

            {user ? (
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="border-0 d-flex align-items-center"
                >
                  <FaUserCircle size={22} className="me-1" />
                  <span className="d-none d-md-inline">
                    {user.email.split("@")[0]}
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Offcanvas
        show={sideNav}
        onHide={() => setSideNav(false)}
        placement="end"
        className="bg-light"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            <RxCross2
              size={25}
              onClick={() => setSideNav(false)}
              className="cursor-pointer"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3 header-nav">
            <Nav.Link as={Link} to="/home" onClick={() => setSideNav(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs" onClick={() => setSideNav(false)}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/Ourfood" onClick={() => setSideNav(false)}>Our Food</Nav.Link>
            {user ? (
              <Nav.Link onClick={() => { handleLogout(); setSideNav(false); }}>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login" onClick={() => setSideNav(false)}>
                Login
              </Nav.Link>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default Header;
