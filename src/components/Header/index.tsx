import { Container, Menu } from "./style";

export function Header() {
  return (
    <Container>
      <a href="index.html" style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Saesel
      </a>
      <nav>
        <Menu>
          <li>
            <a href="#about">Sobre mim</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#skills">Conhecimentos</a>
          </li>
        </Menu>
      </nav>
    </Container>
  );
}
