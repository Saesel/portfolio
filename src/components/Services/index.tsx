import { Code, MobileAlt, Search } from "@styled-icons/boxicons-regular";

import { Container } from "./style";
import { Service, ServicesContainer } from "./style";

export function Services() {
  return (
    <Container>
      <h2 id="services">Serviços</h2>
      <ServicesContainer>
        <Service>
          <Code />
          <h3>Criação de Sites</h3>
          <p>
            Desenvolvimento Front-End de sites profissionais, portfólios e
            landing pages.
          </p>
        </Service>
        <Service>
          <MobileAlt />
          <h3>Responsividade</h3>
          <p>
            Adaptação de site de forma adequada para diferentes dispositivos e
            resoluções de tela.
          </p>
        </Service>
        <Service>
          <Search />
          <h3>SEO</h3>
          <p>
            Optimização visando alcançar melhores resultados em mecanismos de
            busca.
          </p>
        </Service>
      </ServicesContainer>
    </Container>
  );
}
