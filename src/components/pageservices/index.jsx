import Header from "../header"

import "./style.css"


import { Footer } from "../footer"

import img1 from "../../assets/images/servicos/image002.jpg";
import img2 from "../../assets/images/servicos/image003.jpg";
import img3 from "../../assets/images/servicos/image006.jpg";
import img4 from "../../assets/images/servicos/image008.jpg";
import img5 from "../../assets/images/servicos/image009.jpg";
import img6 from "../../assets/images/servicos/image011.jpg";
import img7 from "../../assets/images/servicos/image015.jpg";
import img8 from "../../assets/images/servicos/image017.jpg";
import img9 from "../../assets/images/servicos/image019.png";
import img10 from "../../assets/images/servicos/image021.png";
import img11 from "../../assets/images/servicos/image023.png";
import imges from "../../assets/images/servicos/image013.jpg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// import img12 from "../../assets/images/servicos/image0025.jpg";






export default function PageServices() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Isso faz a página rolar para o topo sempre que a rota mudar
  }, [location.pathname]); 
  return (
    <div class="main">
      <Header destiny={"/"} />
      <div class="text">
        <h2>
          Descubra a Excelência: Nossos Serviços Exclusivos para Transformar sua
          Experiência!
        </h2>
        <p>Explore serviços excepcionais que transformarão sua experiência. Da personalização às soluções inovadoras, oferecemos qualidade superior para superar suas expectativas. Descubra o poder da excelência em cada interação. Estamos prontos para encantar você.</p>
      </div>


      <div class="text">
        <h2>
          PRAÇA DO TANQUE GRANDE: PONTO DE ENCONTRO NO CENTRO DA FEIRA DE LAGARTO
        </h2>
        <p>Na Praça do Tanque Grande podemos encontrar diversas lojas e pontos de serviços públicos e privados. A praça é um local histórico e cultural na cidade de Lagarto. Ela fica no centro da cidade, perto do mercado municipal. É palco de eventos festivos, como o Festival da Mandioca, que ocorre no mês de junho e reúne shows musicais, comidas típicas e artesanato. Outras festividades da cidade também são celebradas no local. A praça também recebe outras atividades ao longo do ano, como feiras, exposições, shows, apresentações artísticas, oficinas, palestras e oferecimento de serviços sociais.</p>
      </div>

      <div className="images-services">


        <img src={img1} alt="" />

        <p>
          Praça do Tanque Grande decorada com bandeirolas para as festividades juninas. Praça do Tanque Grande. Fonte: Rosana Rocha Siqueira, 2022.
        </p>

        <a href="https://www.google.com/maps/place/Pra%C3%A7a+Do+Tanque+Grande/@-10.9199727,-37.6687211,17z/data=!3m1!4b1!4m6!3m5!1s0x71022ee8f1c8ae9:0x75169ffa2505eac6!8m2!3d-10.9199727!4d-37.6661462!16s%2Fg%2F11cn692c_l?authuser=2&entry=ttu" target="_blank" rel="external">
          <p>Localização</p>
        </a>


      </div>

      <div class="text">

        <p>Na Praça do Tanque Grande podemos encontrar diversas lojas e pontos de serviços públicos e privados. A praça é um local histórico e cultural na cidade de Lagarto. Ela fica no centro da cidade, perto do mercado municipal. É palco de eventos festivos, como o Festival da Mandioca, que ocorre no mês de junho e reúne shows musicais, comidas típicas e artesanato. Outras festividades da cidade também são celebradas no local. A praça também recebe outras atividades ao longo do ano, como feiras, exposições, shows, apresentações artísticas, oficinas, palestras e oferecimento de serviços sociais.</p>
      </div>

      <div className="images-services">


        <img src={img2} alt="" />

        <p>
          Barracas de comerciantes na região da feira.
          Praça do Tanque Grande. Fonte: Rosana Rocha Siqueira, 2022.
        </p>

        <a href="https://www.google.com/maps/place/Pra%C3%A7a+Do+Tanque+Grande/@-10.9199727,-37.6687211,17z/data=!3m1!4b1!4m6!3m5!1s0x71022ee8f1c8ae9:0x75169ffa2505eac6!8m2!3d-10.9199727!4d-37.6661462!16s%2Fg%2F11cn692c_l?authuser=2&entry=ttu" target="_blank" rel="external">
          <p>Localização</p>
        </a>


      </div>

      <div class="text">
        <h2>
          SERVIÇOS PÚBLICOS
        </h2>

        <h3>
          CEAC
        </h3>

        <p>
          A praça também abriga uma unidade do Centro de Atendimento ao Cidadão (CEAC), que oferece diversos serviços públicos, como expedição de carteiras de identidade e antecedentes criminais, além de consultas e orientações.
        </p>
      </div>

      <div className="images-services">


        <img src={img3} alt="" />

        <p>
          Serviços ofertados pelo Centro de Atendimento ao Cidadão (CEAC) de Lagarto.
          CEAC. Fonte: Rosana Rocha Siqueira, 2022.
          (CEAC Lagarto - CENTRO DE ATENDIMENTO AO CIDADÃO)

        </p>

        <a href="https://www.google.com/maps/place/CEAC+Lagarto+-+CENTRO+DE+ATENDIMENTO+AO+CIDAD%C3%83O/@-10.9197629,-37.6667722,17z/data=!4m15!1m8!3m7!1s0x710235a39e688ff:0xb291e9dd5fb108a8!2sCEAC+Lagarto+-+CENTRO+DE+ATENDIMENTO+AO+CIDAD%C3%83O!8m2!3d-10.9197547!4d-37.6667758!10e5!16s%2Fg%2F11smw3vvfb!3m5!1s0x710235a39e688ff:0xb291e9dd5fb108a8!8m2!3d-10.9197547!4d-37.6667758!16s%2Fg%2F11smw3vvfb?authuser=2&entry=ttu" target="_blank" rel="external">
          <p>Localização</p>
        </a>

        <img src={img4} alt="" />

        <p>
          Fachada do Centro de Atendimento ao Cidadão (CEAC) de Lagarto.
          CEAC. Fonte: Rosana Rocha Siqueira, 2022.
          (CEAC Lagarto - CENTRO DE ATENDIMENTO AO CIDADÃO)

        </p>

      </div>


      <div class="text">
        <h2>
          TRANSPORTES
        </h2>
        <p>Há alguns estabelecimentos comerciais que oferecem estacionamento na praça. Esses locais funcionam de segunda a sábado, em horários variados, e cobram uma taxa pelo serviço. Também há vagas de estacionamento na rua, mas elas são limitadas e disputadas.</p>
      </div>

      <div className="images-services">


        <img src={img5} alt="" />

        <p>
          Ônibus de transporte intramunicipal estacionados.
          Praça do Tanque Grande. Fonte: Rosana Rocha Siqueira, 2022.
          (Praça Do Tanque Grande)

        </p>

        <a href="https://www.google.com/maps/place/Pra%C3%A7a+Do+Tanque+Grande/@-10.9199727,-37.6687211,17z/data=!3m1!4b1!4m6!3m5!1s0x71022ee8f1c8ae9:0x75169ffa2505eac6!8m2!3d-10.9199727!4d-37.6661462!16s%2Fg%2F11cn692c_l?authuser=2&entry=ttu" target="_blank" rel="external">
          <p>Localização</p>
        </a>


      </div>

      <div class="text">

        <p>A Praça do Tanque Grande é um ponto de referência para os transportes coletivos que circulam pela cidade de Lagarto e pelas cidades vizinhas. Há linhas de ônibus, vans e mototáxis que saem e chegam à praça, facilitando o acesso dos moradores e visitantes. Os horários e as tarifas dos transportes dependem do destino e da demanda, mas geralmente funcionam de segunda a domingo, das 6h às 18h. Também é ponto de abastecimento e descarga de mercadorias para o mercado e comércios no geral.</p>
      </div>

      <div className="images-services">


        <img src={img6} alt="" />

        <p>
          Tráfego de veículos. Nas segundas-feiras há um aumento no fluxo de automóveis e pessoas se comparado a imagem.
          Praça do Tanque Grande. Fonte: Rosana Rocha Siqueira, 2022.
          (Praça Do Tanque Grande)

        </p>

        <a href="https://www.google.com/maps/place/Pra%C3%A7a+Do+Tanque+Grande/@-10.9199727,-37.6687211,17z/data=!3m1!4b1!4m6!3m5!1s0x71022ee8f1c8ae9:0x75169ffa2505eac6!8m2!3d-10.9199727!4d-37.6661462!16s%2Fg%2F11cn692c_l?authuser=2&entry=ttu" target="_blank" rel="external">
          <p>Localização</p>
        </a>


      </div>

      <div class="text">
        <h2>
          SERVIÇOS QUE VOCÊ E A COMUNIDADE PODEM CONTAR: SEGURANÇA PÚBLICA, SANEAMENTO, ABASTECIMENTO HÍDRICO E ABASTECIMENTO ENERGÉTICO
        </h2>
        <h3>
          DELEGACIA CIDADÃ DE LAGARTO
        </h3>

        <p>
          A Polícia Civil (PC) atua primariamente na elucidação de crimes, investigando os casos após a ocorrência. É diferente da Polícia Militar, que realiza o patrulhamento ostensivo visando a prevenção de crimes. No entanto, devido ao contingente não suficiente da PM (por vezes) na região, a PC também atua de forma ostensiva.
          <br />

          A Delegacia Cidadã de Lagarto oferece o serviço de registro de Boletim de Ocorrência (B.O.) e atua também com os casos levados pela PM. A delegacia divide-se nas seguintes pastas: homicídios, ocorrências de trânsito, tráfico de drogas, furtos, Acorde (solução de conflitos), casos cibernéticos e grupos vulneráveis. Na pasta de grupos vulneráveis há inclusive o auxílio com serviços de apoio social, tais como acompanhamento psicológico, fornecidos pela polícia e/ou prefeitura municipal.

        </p>
      </div>


      <div className="images-services">


        <img src={imges} alt="" />

        <p>
          Fachada da Delegacia Cidadã de Lagarto (Polícia Civil).
          Fonte: Carlos Eduardo Santana Santos, 2023.

        </p>

        <a href="https://www.google.com/maps/place/Delegacia+Cidad%C3%A3+de+Lagarto/@-10.9193093,-37.664396,17z/data=!3m1!4b1!4m6!3m5!1s0x71022edce88e1c5:0xd2e6da637f3ef861!8m2!3d-10.9193093!4d-37.664396!16s%2Fg%2F11c5xw89sd?authuser=2&entry=ttu" target="_blank" rel="external">
          <p>Localização</p>
        </a>

        <p>
          Em relação aos horários de funcionamento, de segunda a sexta a delegacia segue o expediente normal da polícia. Já no fim de semana ocorre o expediente de plantão.
        </p>


      </div>

      <div class="text">
        <h2>
          DESO
        </h2>
        <p>Na Tv. Limoeiro é possível encontrar a DESO - Companhia de Saneamento de Sergipe, empresa responsável pelo fornecimento de serviços de esgotos, abastecimento hídrico e obras de saneamento para a região de Lagarto. A DESO é uma empresa de economia mista que foi criada em 1969.</p>

      </div>

      <div className="images-services">


        <img src={img7} alt="" />

        <p>
          Fachada da unidade da Companhia de Saneamento de Sergipe (DESO).
          Fonte: Carlos Eduardo Santana Santos, 2023.


        </p>

        <a href="https://www.google.com/maps/place/Deso-Companhia+de+Saneamento+de+Sergipe/@-10.9194406,-37.6668623,17z/data=!3m1!4b1!4m6!3m5!1s0x71022ecf58c0f63:0xfffa8d2e63ff7ffb!8m2!3d-10.9194406!4d-37.6642874!16s%2Fg%2F1tczqk9p?authuser=2&entry=ttu" target="_blank" rel="external">
          <p>Localização</p>
        </a>

        <p>
          Nessa unidade é possível ter acesso a contratação de serviços, cancelamento de contratos e outros serviços oferecidos. Além disso, está disponível o atendimento ao público para dúvidas.
        </p>


      </div>

      <div class="text">
        <h2>
          ENERGISA
        </h2>
        <p>A Energisa Distribuidora é uma empresa privada responsável pelo fornecimento de soluções energéticas para a região. Sendo parte do Grupo Energisa, fundado em 1905, a organização atende inclusive em outros estados do Brasil.</p>

      </div>


      <div className="images-services">


        <img src={img8} alt="" />

        <p>
          Fachada da unidade da Energisa Distribuidora.
          Fonte: Carlos Eduardo Santana Santos, 2023.



        </p>

        <a href="https://www.google.com/maps/place/Energisa+-+Posto+de+Atendimento/@-10.9191878,-37.6638874,17z/data=!3m1!4b1!4m6!3m5!1s0x71022edc51cf5b1:0xffbf7f0abe6c4aba!8m2!3d-10.9191878!4d-37.6638874!16s%2Fg%2F11b5vx_0fl?authuser=2&entry=ttu" target="_blank" rel="external">
          <p>Localização</p>
        </a>

        <p>
          Nessa unidade é possível ter acesso a contratação de serviços, cancelamento de contratos e outros serviços oferecidos. Além disso, está disponível o atendimento ao público para dúvidas.
        </p>


      </div>

      <div class="text">
        <h2>
          SINDICATOS
        </h2>

        <h3>
          SINTRAF
        </h3>

        <p>

          Da forte tradição agrícola de Lagarto surge o Sindicato dos Trabalhadores Rurais Agricultores Familiares de Lagarto (SINTRAF Lagarto). Mais do que uma entidade, é um alicerce essencial para a sustentabilidade da agricultura familiar e para o enriquecimento da vida na região.
          <br />
          O SINTRAF é mais do que um sindicato. É um defensor dos direitos e do bem-estar dos trabalhadores rurais. Em um cenário onde a agricultura familiar desempenha um papel crucial, o SINTRAF se destaca como um aliado leal, garantindo que cada agricultor possa colher os frutos de seu trabalho com justiça e dignidade.


        </p>

      </div>

      <div className="images-services">


        <img src={img9} alt="" />

        <p>
          Fachada do Sindicato dos Trabalhadores Rurais Agricultores Familiares de Lagarto (SINTRAF Lagarto).
          Fonte: Ricardo Fontes Santos, 2023.
          (Sindicato dos Trabalhadores Rurais de Lagarto)




        </p>

        <a href="https://www.google.com/maps/place/Sindicato+dos+Trabalhadores+Rurais+de+Lagarto/@-10.9191317,-37.666346,18.04z/data=!4m6!3m5!1s0x71022f007f6450f:0x920074c3be6f47b1!8m2!3d-10.9198595!4d-37.6676867!16s%2Fg%2F1tlgy44v?entry=ttu" target="_blank" rel="external">
          <p>Localização</p>
        </a>




      </div>

      <div class="text">

        <p>Desde a orientação sobre aposentadoria rural, assessoria jurídica, suporte para regularização ambiental até a emissão de documentos como a DAP/CAF, o SINTRAF oferece uma ampla gama de serviços para atender às diversas necessidades dos agricultores familiares, sempre com o foco no desenvolvimento sustentável da comunidade.
          Além de lidar com questões agrícolas, o sindicato também se estende para abraçar a cultura e a identidade local. Seus horários de atendimento são de segunda a sexta-feira, das 7h às 12h e das 13h30 às 16h, de modo a se adequar ao ritmo da vida rural.
        </p>

      </div>

      <div className="images-services">


        <img src={img10} alt="" />

        <p>
          Fachada do Sindicato dos Trabalhadores Rurais Agricultores Familiares de Lagarto (SINTRAF Lagarto).
          Fonte: Ricardo Fontes Santos, 2023.
          (Sindicato dos Trabalhadores Rurais de Lagarto)




        </p>

        <a href="https://www.google.com/maps/place/Sindicato+dos+Trabalhadores+Rurais+de+Lagarto/@-10.9191317,-37.666346,18.04z/data=!4m6!3m5!1s0x71022f007f6450f:0x920074c3be6f47b1!8m2!3d-10.9198595!4d-37.6676867!16s%2Fg%2F1tlgy44v?entry=ttu" target="_blank" rel="external">
          <p>Localização</p>
        </a>

        <p>
          O SINTRAF Lagarto é mais do que uma instituição. É um laço vital que une a agricultura familiar ao coração pulsante de Lagarto. Ao promover a justiça, a sustentabilidade e o desenvolvimento, o sindicato contribui significativamente para a construção de um futuro vibrante para a cidade. Se você ainda não o conhece, é hora de se conectar, participar e descobrir como ele fortalece a comunidade rural e enriquece o tecido cultural de Lagarto.
        </p>



      </div>

      <div class="text">
        <h2>
          CLÍNICAS
        </h2>
        <h3>
          SAÚDE E CUIDADO NA CLÍNICA CINSAÚDE: UM PEDAÇO DO CORAÇÃO LAGARTENSE
        </h3>

        <p>
          Enquanto as lojas de diversos setores impulsionam a economia da região, é na Clínica Popular CINSAÚDE que os lagartenses encontram um espaço acolhedor e vital para sua saúde física e emocional. Ela não é apenas um centro médico. É um refúgio onde a preocupação genuína com o bem-estar se torna palpável. Nela os lagartenses têm acesso a uma gama diversificada de serviços médicos, contribuindo para o florescimento da saúde local.
          <br />
          Assim como a feira, a Clínica CINSAÚDE está profundamente conectada à comunidade. Seja em um teste de COVID-19 para garantir a segurança de todos ou em serviços especializados, como ultrassonografia e medicina do trabalho, a clínica desempenha um papel vital na promoção da saúde e qualidade de vida. Com disponibilidade durante os dias da semana e horários flexíveis, a clínica está pronta para atender aos diferentes públicos da região.

        </p>

      </div>

      <div className="images-services" style={{marginBottom:"10rem"}}>


        <img src={img11} alt="" />

        <p>
        Fachada da Clínica Popular CINSAÚDE.
Fonte: Ricardo Fontes Santos, 2023.
(CINSAUDE , Clinica Popular .)





        </p>

        <a href="https://www.google.com/maps/place/CINSAUDE+,+Clinica+Popular+./@-10.9201754,-37.6663712,17z/data=!3m1!4b1!4m6!3m5!1s0x71023f9c1d09375:0x94bf1efda6500c3d!8m2!3d-10.9201754!4d-37.6663712!16s%2Fg%2F11h37rtlkt?entry=ttu" target="_blank" rel="external">
          <p>Localização</p>
        </a>

        <p>
        Se você ainda não conhece a Clínica CINSAÚDE, está perdendo uma parte essencial da essência lagartense. É mais do que um centro de saúde. É um ponto de encontro para o cuidado compassivo, a construção de comunidade e a celebração da vida. Assim como a feira é o coração pulsante da cidade, a Clínica Cinsaúde é o coração que bate em sintonia com a saúde e o bem-estar de Lagarto.
        </p>




      </div>





      <Footer />
    </div>
  )
}