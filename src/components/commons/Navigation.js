import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaChromecast, FaPrint, FaQuestion } from 'react-icons/fa';
import { BiAbacus, BiExport } from 'react-icons/bi';
const Navigation = () => {
  return (
    <div className="nav-container">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home" className="mr-auto">
          Diagnostic Tool
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <span className="nav-span">Logged in as General User</span>
            <Nav.Link href="#home">
              <BiExport size={25} />
            </Nav.Link>
            <Nav.Link href="#home">
              <BiAbacus size={25} />
            </Nav.Link>
            <Nav.Link href="#home">
              <FaChromecast size={25} />
            </Nav.Link>
            <Nav.Link href="#home">
              <FaPrint size={25} />
            </Nav.Link>
            <Nav.Link href="#home">
              <FaQuestion size={25} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
