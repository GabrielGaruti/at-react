import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Ideia = ({ text, imageUrl }) => {
  return (
    <Container>
      <Col>
        <Col
          md={12}
          className="text-container d-flex align-items-center justify-content-center flex-column"
        >
          <h1 style={{ fontSize: "50px" }}>NOSSA IDEIA DE MUDANÇA!</h1>
          <br />
          <p style={{ fontSize: "30px", textAlign: "center" }}>{text}</p>
          <br />
          <Button className="btn btn-success" href="/proposta">Saiba Mais!</Button>
        </Col>
        <br/>
        <br/>
        <Col className="image-container d-flex justify-content-center">
          <img
            src={imageUrl}
            alt="Imagem"
            className="img-fluid shadow"
            style={{
              maxHeight: "500px",
              width: "90%",
              borderRadius: "10px",
            }}
          />
        </Col>
      </Col>
    </Container>
  );
};

export default Ideia;
