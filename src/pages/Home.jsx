import React from "react";
import Carrosel from "./Carrosel";
import Menu from "./Menu";
import Footer from "./Footer";
import Descript from "./Descript";
import Recursos from "./Recursos";
import Impact from "./DescriptImpacto";
import Ideia from "./DescriptIdeia";
import "./Home.css"; // Importe o arquivo CSS que você criou

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
            text="O EcoPlanet visa sensibilizar e educar as pessoas sobre a importância da sustentabilidade, incentivando ações positivas para minimizar o impacto ambiental. Ao reunir uma comunidade comprometida, a plataforma pode contribuir para a redução das emissões de carbono, a conservação de recursos naturais e o estímulo a uma economia mais verde."
            imageUrl="https://cdn.discordapp.com/attachments/722415232521076746/1142939585974911087/64d3a3cd484296fe3036bfd6.png"
          />
        </div>
        <div className="proposta">
          <Ideia
            text="Nossa proposta é criar um site de navegador interativo onde os usuários podem se envolver em atividades e desafios relacionados à sustentabilidade para ganhar EcoPoints. Esses EcoPoints seriam moedas virtuais que podem ser trocadas por recompensas reais, como descontos em produtos e serviços e doações para organizações ambientais."
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
