import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar o CSS do Bootstrap
import "./Recursos.css"; // Importe o arquivo CSS que você criou

const Recursos = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div>
        <h1 className="text-center mb-4" style={{ fontSize: '50px' }}>OUTROS RECURSOS E FUNCIONALIDADES</h1>
        <br/>
        <br/>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h2 className="card-title">Calculadora de Carbono</h2>
                <p className="card-text">
                  Os usuários podem calcular sua pegada de carbono pessoal, com
                  base em seus hábitos de consumo e estilo de vida. Isso ajuda a
                  conscientizar sobre o impacto ambiental de suas ações e
                  incentiva a busca por alternativas mais sustentáveis.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h2 className="card-title">Dicas Personalizadas da ONG</h2>
                <p className="card-text">
                  Com base nos resultados da pegada de carbono, o EcoPlanet fornece
                  dicas personalizadas para reduzir o impacto ambiental. Essas
                  dicas podem variar desde opções de transporte até escolhas de
                  alimentos e economia de energia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h2 className="card-title">
                  Desafios Sustentáveis para os Usuários
                </h2>
                <p className="card-text">
                  A plataforma oferece desafios mensais ou semanais que os
                  usuários podem aderir para incorporar práticas sustentáveis em
                  suas vidas. Os usuários podem acompanhar seu progresso e
                  ganhar pontos por cada desafio completado.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h2 className="card-title">Mapa de Sustentabilidade</h2>
                <p className="card-text">
                  O mapa interativo exibirá marcadores geográficos que
                  representam locais e iniciativas sustentáveis. Isso inclui
                  pontos de coleta de resíduos, estações de reciclagem, fazendas
                  orgânicas, empresas amigas do ambiente, entre outros
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h2 className="card-title">Marketplace Sustentável</h2>
                <p className="card-text">
                  O Marketplace Sustentável será uma área onde os usuários
                  poderão comprar produtos e serviços eco-friendly de empresas.
                  Isso incentiva o apoio a negócios que priorizam a
                  sustentabilidade e promove uma economia mais verde.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h2 className="card-title">Comunidade e Redes Sociais</h2>
                <p className="card-text">
                  Os usuários podem se conectar com outros membros, compartilhar
                  suas conquistas sustentáveis, participar de fóruns de
                  discussão e trocar ideias. A plataforma também está integrada
                  às redes sociais para ampliar o alcance e o engajamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recursos;
