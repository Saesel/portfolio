import { Container } from "./style";
import { MenuItem } from "../MenuItem";

export function MobileMenu() {
  return (
    <Container>
      <MenuItem href="#about" description="Sobre mim" />
      <MenuItem href="#projects" description="Projetos" />
      <MenuItem href="#services" description="Serviços" />
      <MenuItem href="#skills" description="Conhecimentos" />
    </Container>
  );
}
