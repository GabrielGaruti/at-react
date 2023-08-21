import React from "react";
import Carrosel from "./Carrosel";
import Menu from "./Menu";
import Footer from "./Footer";
import Descript from "./Descript";
import Recursos from "./Recursos";
import Impact from "./DescriptImpacto";
import Ideia from "./DescriptIdeia";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="menu">
        <Menu />
      </div>
      <Carrosel />

      <div className="conteudo">
        <div>
          <Descript
            text="Nosso papel é monitorar o clima que ocorre em nossa floresta Amazônia e prever futuro riscos."
            imageUrl="https://cdn.discordapp.com/attachments/722415232521076746/1142939278704398336/64d39d35569bdb8af48aadbd.png"
          />
        </div>
        <div className="conteudo">
          <Impact
            text="O impacto que a Sipremo terá sobre a nossa floresta é extraordinário, prevendo os problemas economizamos muito dinheiro e tambem perda de áreas florestais."
            imageUrl="https://cdn.discordapp.com/attachments/722415232521076746/1142939585974911087/64d3a3cd484296fe3036bfd6.png"
          />
        </div>
        <div className="proposta">
          <Ideia
            text="Baseado nas duas verticais de influências do
            ambiente e da operação, a IA foi construída,
            como uma rede neural artificial em um modelo
            semi-supervisionado para atender as demandas
            de adaptação e escalar os resultados."
            imageUrl="https://cdn.discordapp.com/attachments/722415232521076746/1142939705411915857/64d3a07316dd22964487359e.png"
          />
        </div>
        <div className="cards">
          <Recursos />
        </div>
      </div>
      <div className="conteudo">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
