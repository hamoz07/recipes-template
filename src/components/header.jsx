import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import foodera from "../assets/logo.png";
import { cartState } from "../../../shopping-cart/src/context/Context";

function Header() {
  
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={foodera} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action2">Explore Foods</Nav.Link>
            <Nav.Link href="#action2">Reviews</Nav.Link>
            <Nav.Link href="#action2">Faq</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>1800 789 123</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
        
    </Navbar>
  );
}

export default Header;
