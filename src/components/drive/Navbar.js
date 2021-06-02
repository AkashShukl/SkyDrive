import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComp() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ justifyContent: "space-between", padding: "10px" }}
    >
      <Navbar.Brand as={Link} to="/">
        SkyDrive
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
