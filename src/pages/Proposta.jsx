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
          PROPOSTA DA ECOPLANET!
        </h1>
        <br />
        <Container>
          <p style={{ fontSize: "24px", textAlign: "center", marginBottom: "5rem" }}>
            Nossa proposta é criar um site de navegador interativo onde os usuários devem, através de um plano personalizado de metas e objetivos, se envolver em atividades e desafios relacionados à sustentabilidade para ganhar EcoPoints no nosso site. Esses EcoPoints seriam moedas virtuais que podem ser trocadas por recompensas reais, como descontos em produtos e serviços e doações para organizações ambientais.
            <br />
            <br/>
            <h3>COMO FUNCIONA OS PLANOS!</h3>
            Para criar o plano personalizado será feita uma integração com o ChatGPT. Toda vez que uma pessoa entrar no plano do nosso site, ele terá que fornecer algumas informações para personalizar o seu plano de acordo com o estilo de vida dele. Após isso, será descrito no Chat GPT para criar um plano de acordo com as informações fornecidas, e após sua criação, graças a integração com nosso site, será publicado para o usuário começar a usar e melhorar a sustentabilidade do planeta.
          </p>
        </Container>
      </Col>
      <br />
      <br />
      <br />
      <Container>
        <Col className="image-container d-flex justify-content-center" style={{ marginBottom: "4rem" }} >
          <img
            src="https://cdn.discordapp.com/attachments/769767224911069236/1142130257797861527/pexels-akil-mazumder-1072824.jpg"
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
