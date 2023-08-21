import React from "react";
import Container from "react-bootstrap/Container";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <br />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section container">
            <div className="d-flex ">
            
            
            <h3>SIPREMO</h3>
            </div>
           
            
          </div>
          <div className="footer-section">
            <h3>Links Úteis</h3>
            <ul>
              <li>
                <a href="/">Página Inicial</a>
              </li>
              <li>
                <a href="/sobre">Sobre</a>
              </li>
              <li>
                <a href="/contato">Contato</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <ul>
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} EcoPlanet. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
