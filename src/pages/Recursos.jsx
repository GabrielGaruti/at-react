import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar o CSS do Bootstrap
import "./Recursos.css"; // Importe o arquivo CSS que você criou

const Recursos = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div>
        <h1 className="text-center mb-4" style={{ fontSize: '50px' }}>NOSSOS NÚMEROS</h1>
        <br/>
        <br/>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h2 className="card-title">+$1MILHÃO</h2>
                <p className="card-text">
                  economizados
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h2 className="card-title">+600.000km quadrados</h2>
                <p className="card-text">
                  monitorados
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h2 className="card-title">
                  +66%
                </h2>
                <p className="card-text">
                  de proatividade
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
