import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavApp() {
  return (
    <>
      <Navbar expand="md" sticky="top" bg="light" data-bs-theme="light">
        <Container fluid className="container">
          <Navbar.Brand className="mulish-Font700 " href="#home">
            Healtcare ID
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 mulish-Font500"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Nav.Link href="#home" className="hover-underline">
                Home
              </Nav.Link>
              <Nav.Link href="#doctor" className="hover-underline">
                Find a doctor
              </Nav.Link>
              <Nav.Link href="#apps" className="hover-underline">
                Apps
              </Nav.Link>
              <Nav.Link href="#testimonials" className="hover-underline">
                Testimonials
              </Nav.Link>
              <Nav.Link href="#contact" className="hover-underline">
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavApp;
