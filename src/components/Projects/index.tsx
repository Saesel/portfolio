import { Container, Project, ProjectsContainer } from "./style";

export function Projects() {
  return (
    <Container>
      <h2>Projetos</h2>
      <ProjectsContainer>
        <Project>
          <h3>Em breve</h3>
          <p>Logo mais um novo projeto irá aparecer por aqui!</p>
        </Project>
        <Project>
          <h3>Em breve</h3>
          <p>Logo mais um novo projeto irá aparecer por aqui!</p>
        </Project>
        <Project>
          <h3>Em breve</h3>
          <p>Logo mais um novo projeto irá aparecer por aqui!</p>
        </Project>
      </ProjectsContainer>
      <a href="https://github.com/Saesel?tab=repositories">
        Repositórios no GitHub
      </a>
    </Container>
  );
}
