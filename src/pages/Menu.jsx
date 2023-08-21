import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menu() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="/">
{' '}
            SIPREMO
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
         
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
