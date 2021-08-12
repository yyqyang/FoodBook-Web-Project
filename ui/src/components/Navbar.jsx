import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoutButton from './LogoutButton';
class MyNavbar extends React.Component {
    render() {
      return (
        <div>
          <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
              <Navbar.Brand href="#home">FoodBook</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="./FoodBook#home">Home</Nav.Link>
                  
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
            <LogoutButton/>
          </Navbar>
        </div>
      )
    }
  }
export default MyNavbar;