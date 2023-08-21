import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menu() {
  return (
    <>
      <Navbar bg="success" variant="dark">
        <Container>
        <Navbar.Brand href="/">
            <img
              alt=""  
              src="/src/assets/logo.png"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            EcoPlanet
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
          <Navbar.Text>
            Signed in as: <a href="#login">Luiz Felipe</a>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
