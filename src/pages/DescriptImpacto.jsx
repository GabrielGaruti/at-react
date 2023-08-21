import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importe o CSS do Bootstrap
import { Container, Row, Col } from "react-bootstrap"; // Importe os componentes do Bootstrap

const Descript = ({ text, imageUrl }) => {
  return (
    <Container>
      <Row>
        <Col md={6} className="image-container">
          <img
            src={imageUrl}
            alt="Imagem"
            className="img-fluid shadow" // Adicionando a classe shadow para o efeito de sombra
            style={{
              maxHeight: "700px",
              width: "80%",
              borderRadius: "10px", // Adicionando um leve arredondamento
            }}
          />
        </Col>
        <Col
          md={6}
          className="text-container d-flex align-items-center justify-content-center flex-column text-end"
        >
          <h1 style={{ fontSize: "50px" }}>IMPACTO ESPERADO</h1>
          <br />
          <p style={{ fontSize: "30px", textAlign: "right" }}>{text}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Descript;
