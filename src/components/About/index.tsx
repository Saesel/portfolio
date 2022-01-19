import { Container, Profile, ProfilesContainer } from "./style";

export function About() {
  return (
    <Container>
      <h2>Sobre mim</h2>
      <p>
        Me chamo Samuel, também conhecido como Saesel, tenho 21 anos, sou
        natural do Rio Grande do Sul e sou estudante de Sistemas de Informação
        na Universidade Federal do Rio Grande (FURG), atualmente cursando o
        quarto semestre.
      </p>
      <p>
        Sou desenvolvedor Front-End que está sempre buscando novas oportunidades
        que me possibilitem evoluir tanto pessoalmente quanto profissionalmente,
        visando ampliar meus conhecimentos, habilidades e networkings.
      </p>
      <ProfilesContainer>
        <Profile>
          <i className="far fa-envelope"></i>
          <h3>E-mail</h3>
          <a href="mailto:samuel_gomes26@hotmail.com">
            samuel_gomes26@hotmail.com
          </a>
        </Profile>
        <Profile>
          <i className="fab fa-github"></i>
          <h3>Github</h3>
          <a href="https://github.com/Saesel/">Saesel</a>
        </Profile>
        <Profile>
          <i className="fab fa-instagram"></i>
          <h3>Instagram</h3>
          <a href="https://instagram.com/samuelgomes0/">Samuel Gomes</a>
        </Profile>
        <Profile>
          <i className="fab fa-linkedin"></i>
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/samuelgomes0/">
            Samuel Gomes Rosa
          </a>
        </Profile>
      </ProfilesContainer>
    </Container>
  );
}
