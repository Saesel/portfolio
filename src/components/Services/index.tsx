import { Code, MobileAlt } from "@styled-icons/boxicons-regular";

import { Container } from "../About/style";
import { Service, ServicesContainer } from "./style";

export function Services() {
  return (
    <Container>
      <h2>Serviços</h2>
      <ServicesContainer>
        <Service>
          <Code />
          <p>Criação de Sites</p>
        </Service>
        <Service>
          <MobileAlt />
          <p>Responsividade</p>
        </Service>
      </ServicesContainer>
    </Container>
  );
}
