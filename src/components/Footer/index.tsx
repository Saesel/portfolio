import { Container } from "./style";

export function Footer() {
  return (
    <Container>
      <p>
        Desenvolvido com <span>❤</span> por
        <a href="https://github.com/Saesel/" target="_blank" rel="noreferrer">
          {" "}
          Samuel Gomes
        </a>
        .
      </p>
    </Container>
  );
}
