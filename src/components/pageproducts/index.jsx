import Header from "../header";

import { Footer } from "../footer"

import img1 from "../../assets/images/logistas/image001.jpg"
import img2 from "../../assets/images/logistas/image003.jpg"
import img3 from "../../assets/images/logistas/image005.jpg"
import img4 from "../../assets/images/logistas/image008.jpg"
import img5 from "../../assets/images/logistas/image010.jpg"
import img6 from "../../assets/images/logistas/image011.jpg"
import img7 from "../../assets/images/logistas/image013.jpg"
import img8 from "../../assets/images/logistas/image015.jpg"
import img9 from "../../assets/images/logistas/image017.jpg"
import img10 from "../../assets/images/logistas/image019.jpg"
import img11 from "../../assets/images/logistas/image021.jpg"
import img12 from "../../assets/images/logistas/image023.jpg"
import img13 from "../../assets/images/logistas/image025.jpg"
import img14 from "../../assets/images/logistas/image027.jpg"
import img15 from "../../assets/images/logistas/image029.jpg"
import img16 from "../../assets/images/logistas/image031.jpg"
import img17 from "../../assets/images/logistas/image033.jpg"
import img18 from "../../assets/images/logistas/image035.jpg"
import img19 from "../../assets/images/logistas/image037.jpg"
import img20 from "../../assets/images/logistas/image039.jpg"
import img21 from "../../assets/images/logistas/image041.jpg"
import img22 from "../../assets/images/logistas/image043.jpg"
import img23 from "../../assets/images/logistas/image045.jpg"
import img24 from "../../assets/images/logistas/image047.png"
import img25 from "../../assets/images/logistas/image049.png"
import img26 from "../../assets/images/logistas/image051.png"
import img27 from "../../assets/images/logistas/image053.jpg"
import img28 from "../../assets/images/logistas/image055.jpg"
import img29 from "../../assets/images/logistas/image057.jpg"
import img30 from "../../assets/images/logistas/image059.jpg"
import img31 from "../../assets/images/logistas/image061.jpg"
import img32 from "../../assets/images/logistas/image064.jpg"
import img33 from "../../assets/images/logistas/image065.png"
import img34 from "../../assets/images/logistas/image067.jpg"
import img35 from "../../assets/images/logistas/image069.jpg"
import img36 from "../../assets/images/logistas/image071.jpg"
import img37 from "../../assets/images/logistas/image073.jpg"
import img38 from "../../assets/images/logistas/image075.jpg"






import "./style.css"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function PageProducts() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Isso faz a página rolar para o topo sempre que a rota mudar
  }, [location.pathname]); 

  return (
    <div className="main">
      <Header destiny={"/"} />
      {/* <div className="text">
        <h2>
          Explorando Possibilidades: Nossos Produtos, Sua Experiência Inigualável
        </h2>

        <p>
          Explore serviços excepcionais que transformarão sua experiência. Da
          personalização às soluções inovadoras, oferecemos qualidade superior
          para superar suas expectativas. Descubra o poder da excelência em cada
          interação. Estamos prontos para encantar você.
        </p>
      </div> */}


      <div className="content">
        <div className="text">

          <h3>
            LOJISTAS FORMAIS NA REGIÃO DA FEIRA LIVRE DE LAGARTO/SE
            SUPERMERCADO
          </h3>

          <p>
            Venha conhecer uma das unidades da linha de supermercados Couto. Ele fica próximo ao Mercado Municipal, na Av. Sindicalista Antônio Francisco da Rocha, 2145 - Centro e disponibiliza diversos produtos, como pães e variedades da confeita, como doces e salgados; açougue para quem busca alimentos de origem animal como carnes e processados; Hortifruti; e boas opções de bebidas. O local funciona de segunda a sexta das 6h às 19h e aos domingos de 6h às 10h.
          </p>

        </div>

        <div className="images-products">

          <a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">
            <img src={img1} alt="" />

          </a>

          <p>Autor: Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">Localização</a></p>



          <a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">
            <img src={img2} alt="" />

          </a>

          <p>Setor de itens de casa; Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">Localização</a></p>



          <a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">
            <img src={img3} alt="" />

          </a>

          <p>Autor: Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">Localização</a></p>



          <a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">
            <img src={img4} alt="" />

          </a>

          <p>Setor de enlatados; Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">Localização</a></p>



          <a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">
            <img src={img5} alt="" />

          </a>

          <p>Autor: Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">Localização</a></p>



          <a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">
            <img src={img6} alt="" />

          </a>

          <p>Setor de pães; Cleberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">Localização</a></p>



          <a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">
            <img src={img7} alt="" />

          </a>

          <p>Autor: Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">Localização</a></p>



          <a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">
            <img src={img8} alt="" />

          </a>

          <p>Prateleira de confeitaria; Cleberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">Localização</a></p>


                    
          <a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">
            <img src={img9} alt="" />

          </a>

          <p>Autor: Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">Localização</a></p>



          <a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">
            <img src={img10} alt="" />

          </a>

          <p>Hortifruti; Cleberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">Localização</a></p>



          <a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">
            <img src={img11} alt="" />

          </a>

          <p>Autor: Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">Localização</a></p> 

          
          <a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">
            <img src={img12} alt="" />

          </a>

          <p>Autor: Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">Localização</a></p> 




        </div>


        <div className="text">

          <h3>

            DOCES E ARTIGOS FESTIVOS

          </h3>

          <p>
            Logo ao lado do Supermercado Couto, conheça O Rei das Embalagens, onde você pode encontrar uma imensa variedade de doces e itens de festa, como copos, pratos, caixas. Além desses, há itens de papelaria, limpeza de casa, grãos e frios.
          </p>

        </div>

        <div className="images-products">

          <a href="https://maps.app.goo.gl/dVRMRnw3cAijcPxc6" target="_blank" rel="external">
            <img src={img13} alt="" />

          </a>

          <p>Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/dVRMRnw3cAijcPxc6" target="_blank" rel="external">Localização</a></p>





          <a href="https://maps.app.goo.gl/dVRMRnw3cAijcPxc6" target="_blank" rel="external">
            <img src={img14} alt="" />

          </a>

          <p>Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/dVRMRnw3cAijcPxc6" target="_blank" rel="external">Localização</a></p>





          <a href="https://maps.app.goo.gl/dVRMRnw3cAijcPxc6" target="_blank" rel="external">
            <img src={img15} alt="" />

          </a>

          <p>Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/dVRMRnw3cAijcPxc6" target="_blank" rel="external">Localização</a></p>





          <a href="https://maps.app.goo.gl/dVRMRnw3cAijcPxc6" target="_blank" rel="external">
            <img src={img16} alt="" />

          </a>

          <p>Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/dVRMRnw3cAijcPxc6" target="_blank" rel="external">Localização</a></p>





          <a href="https://maps.app.goo.gl/dVRMRnw3cAijcPxc6" target="_blank" rel="external">
            <img src={img17} alt="" />

          </a>

          <p>Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/dVRMRnw3cAijcPxc6" target="_blank" rel="external">Localização</a></p>





          <a href="https://maps.app.goo.gl/dVRMRnw3cAijcPxc6" target="_blank" rel="external">
            <img src={img18} alt="" />

          </a>

          <p>Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/dVRMRnw3cAijcPxc6" target="_blank" rel="external">Localização</a></p>





          <a href="https://maps.app.goo.gl/dVRMRnw3cAijcPxc6" target="_blank" rel="external">
            <img src={img19} alt="" />

          </a>

          <p>Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/dVRMRnw3cAijcPxc6" target="_blank" rel="external">Localização</a></p>






        </div>


        <div className="text">

          <h3>
            Casa dos Bolos
          </h3>

          <p>
            Visite a Casa dos Bolos, localizada na Rua Manoel de Paula Menezes Lima, n 35, Centro, próximo ao local da feira livre de Lagarto, ao lado do posto de gasolina. O estabelecimento conta com mais de 15 sabores de bolo, como chocolate, formigueiro, leite, milho, etc. Além de bolos pudim.
          </p>

        </div>

        <div className="images-products">

          <a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">
            <img src={img20} alt="" />

          </a>

          <p>Autor: Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">Localização</a></p>


          <a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">
            <img src={img21} alt="" />

          </a>

          <p>Autor: Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">Localização</a></p>


          <a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">
            <img src={img22} alt="" />

          </a>

          <p>Autor: Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">Localização</a></p>


          <a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">
            <img src={img23} alt="" />

          </a>

          <p>Autor: Cléberson Santos, 2023</p>
          <p><a href="https://maps.app.goo.gl/bKCYaXhuRNbPWKAS8" target="_blank" rel="external">Localização</a></p>







        </div>


        <div className="images-products">

          <ol>
            <li>
              <h3>Central Agro</h3>
              <p> Localizada na Avenida Rotary, N° 36</p>
              <img src={img24} alt="" />
              <p>Fernando Henrique, 2023.</p>
            </li>
            <li>
              <h3>Casa do Lavrador</h3>
              <p> Rua José monteiro de Carvalho, N° 66</p>
              <img src={img25} alt="" />
              <p>Fernando Henrique, 2023.</p>
            </li>
            <li>
              <h3>Comaze</h3>
              <p> Rua Manoel de Paula Menezes, N° 116.</p>
              <img src={img26} alt="" />
              <p>Fernando Henrique, 2023.</p>
            </li>
            <li>
              <h3>Agro Mix</h3>
              <p> Rua Jose Marcelino Prata, 59</p>
              <img src={img24} alt="" />
              <p>Fernando Henrique, 2023.</p>
            </li>
            <li>
              <h3>Gurupi Construções</h3>
              <p> Av.Sind.Antônio Francisco da Rocha,101.Lagarto/SE</p>
              <img src={img25} alt="" />
              <p>Fernando Henrique, 2023.</p>
            </li>
          </ol>

        </div>

        <div className="text">

          <h3>
            Cosméticos:


          </h3>

          <p>

            Lojas de cosméticos desempenham um papel significativo no cenário local, especialmente em uma cidade onde a estética e cuidados pessoais são valorizados. Produtos como maquiagens de marcas reconhecidas, cuidados para a pele, perfumes e produtos para cabelo estão entre os itens mais procurados.
          </p>

        </div>

        <div className="images-products">

          <ol>
            <li>
              <h3>Beauty Cosméticos</h3>
              <p> R. Floriano Peixoto, 33</p>
              <img src={img27} alt="" />
              <p>Fernando Henrique, 2023.</p>
            </li>
            <li>
              <h3>Hanna Cosmeticos </h3>
              <p>R. Dr. Laudelino Freire, 07 - Centro
              </p>
              <img src={img28} alt="" />
              <p>Fernando Henrique, 2023.</p>
            </li>
            <li>
              <h3>Cosmética

              </h3>
              <p>Rua Laudelino Freire, Nº 145 no bairro Centro.</p>
              <img src={img29} alt="" />
              <p>Fernando Henrique, 2023.</p>
            </li>

          </ol>

        </div>


        <div className="text">

          <h3>
            Vestimentas:


          </h3>



        </div>

        <div className="images-products">

          <ol>
            <li>
              <h3>Clube da Moda</h3>
              <p> Rua Teodoreto Nascimento, 52, LOJA , Centro.</p>
              <img src={img32} alt="" />
              <p>Fernando Henrique, 2023.</p>
            </li>
            <li>
              <h3>Junior Confecções (Masculino) </h3>
              <p>R. Joviniano de Oliveira n° 36, Lagarto, SE, Brasil
              </p>
              <img src={img33} alt="" />
              <p>Fernando Henrique, 2023.</p>
            </li>

          </ol>

        </div>

        <div className="text">

          <h3>
            LOJAS DE VARIEDADES


          </h3>



        </div>

        <div className="images-products">

          <ol>
            <li>
              <h3>
                Junior importados
              </h3>
              <img src={img34} alt="" />
              <p>Eduardo Azevedo, 2023 <br />
                Junior Importados é uma loja de produtos eletrônicos localizada na R. Cel. Souza Freire, 41-37 - Centro, Lagarto - SE, 49400-000. A loja se destaca pela venda de produtos eletrônicos, como Ring Light e caixas de som portáteis.
                ●	Localização: A loja está convenientemente localizada no centro de Lagarto, tornando-a facilmente acessível para os clientes.
                ●	Produtos: Junior Importados oferece uma variedade de produtos eletrônicos, incluindo Ring Light e caixas de som portáteis. Esses produtos são populares entre os clientes que buscam melhorar suas configurações de áudio e vídeo.
                ●	Contato: Os clientes podem entrar em contato com a loja pelo telefone 79 3631-3116 ou pelo e-mail importadosjuniorloja@gmail.com.


              </p>

              <a href="https://maps.app.goo.gl/M5iwGpmfpMeakxVc7 " target="_blank" rel="external"> <p>Localização</p></a>
            </li>


            <li>
              <h3>
                LAGARTO VARIEDADES
              </h3>
              <img src={img35} alt="" />
              <p>Eduardo Azevedo, 2023 <br />


                Lagarto Variedades é uma loja localizada na Praça Rosendo Ribeiro, 64 - Centro, Lagarto - SE. A loja se destaca pela venda de uma variedade de itens, incluindo brinquedos, decorações e itens para o lar.
                ●	Localização: A loja está convenientemente localizada no centro de Lagarto, tornando-a facilmente acessível para os clientes.
                ●	Produtos: Lagarto Variedades oferece uma variedade de produtos, incluindo brinquedos, eletrônicos e itens para a casa. Esses produtos são populares entre os clientes que buscam uma variedade de itens em um só lugar.
                ●	Contato: Os clientes podem entrar em contato com a loja pelo telefone (79) 3631-3016 ou pelo Instagram @lagarto_variedades.
                ●	Preços: A loja tem uma política de preços atraente, com itens disponíveis a partir de R$1,00.


              </p>

              <a href="https://maps.app.goo.gl/zh2wM8P13XJARCKK7 " target="_blank" rel="external"> <p>Localização</p></a>
            </li>


            <li>
              <h3>
                SÓ 3 PREÇOS
              </h3>
              <img src={img36} alt="" />
              <p>Eduardo Azevedo, 2023 <br />


                A loja “Só 3 Preços” é uma loja localizada na Praça Filomeno Hora, Centro. A loja se destaca pela venda de uma variedade de itens a preços acessíveis.
                ●	Localização: A loja está convenientemente localizada no centro de Lagarto, tornando-a facilmente acessível para os clientes.
                ●	Produtos: A loja oferece uma variedade de produtos, incluindo utilidades e brinquedos. Esses produtos são populares entre os clientes que buscam uma variedade de itens em um só lugar.
                ●	Contato: Os clientes podem entrar em contato com a loja pelo telefone (79) 3631-3147.
                ●	Preços: Os preços são bem convidativos, variando conforme tipo e qualidade do produto.


              </p>

              <a href="https://maps.app.goo.gl/zh2wM8P13XJARCKK7 " target="_blank" rel="external"> <p>Localização</p></a>
            </li>




          </ol>

        </div>


        <div className="text">

          <h3>
            LOJAS DE MATERIAIS DE CONSTRUÇÃO


          </h3>

          <div className="images-products">

            <ol>
              <li>
                <h3>
                  J.A Construções
                </h3>
                <img src={img37} alt="" />
                <p>
                  J.A Construções é uma loja de materiais de construção localizada na Av. Sindicalista Antônio Francisco da Rocha - Novo Horizonte, Lagarto - SE, ao lado do mercado municipal.
                  ●	Localização: A loja está convenientemente localizada ao lado do mercado municipal, tornando-a facilmente acessível para os clientes.
                  ●	Produtos: A loja oferece uma variedade de materiais de construção, atendendo às necessidades de construção e reforma dos clientes.
                  ●	Contato: Os clientes podem entrar em contato com a loja pelo telefone (79) 99904-0455.



                </p>

                <a href="https://maps.app.goo.gl/ifR1MEFsMjV8CsUv5  " target="_blank" rel="external"> <p>Localização</p></a>
              </li>


              <li>
                <h3>AGRICON
                </h3>
                <img src={img38} alt="" />
                <p>Eduardo Azevedo, 2023 <br />

                  AGRICON Construções é uma loja de materiais de construção localizada na Av. Sindicalista Antônio Francisco da Rocha - Novo Horizonte, Lagarto - SE, ao lado do mercado municipal.
                  ●	Localização: A loja está convenientemente localizada ao lado do mercado municipal, tornando-a facilmente acessível para os clientes.
                  ●	Produtos: A loja oferece uma variedade de materiais de construção, atendendo às necessidades de construção e reforma dos clientes.
                  ●	Contato: Os clientes podem entrar em contato com a loja pelo telefone (79) 3631-1875.



                </p>

                <a href="https://maps.app.goo.gl/zh2wM8P13XJARCKK7 " target="_blank" rel="external"> <p>Localização</p></a>
              </li>







            </ol>

          </div>



        </div>




      </div>




      <Footer />
    </div>
  );
}
