import Menu from "./Menu";
import Footer from "./Footer";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function Proposta({ text, imageUrl }) {
  return (
    <Col>
      <Menu />
      <Col
        md={12}
        className="text-container d-flex align-items-center justify-content-center flex-column">
        <h1 style={{ fontSize: "50px", marginTop: "50px" }}>
        </h1>
        <br />
        <Container>
          <p style={{ fontSize: "24px", textAlign: "center", marginBottom: "5rem" }}>
            Nosso objetivo é implementar a Inteligência Artificial da Sipremo para prever futuros problemas no nossa floresta Amazônica.
            <br />
            <br/>
          </p>
        </Container>
      </Col>
      <br />
      <br />
      <br />
      <Container>
        <Col className="image-container d-flex justify-content-center" style={{ marginBottom: "4rem" }} >
          <img
            src="https://cdn.discordapp.com/attachments/722415232521076746/1143150060327161856/Z.png"
            alt="Imagem"
            className="img-fluid shadow"
            style={{
              maxHeight: "500px",
              width: "80%",
              borderRadius: "10px",
            }}
          />
        </Col>
      </Container>
      <Button className="btn btn-success container d-flex justify-content-center" href="/">Voltar para pagina principal!</Button>
      <Footer />
    </Col>
  );
}

export default Proposta;
