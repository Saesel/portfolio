import { Project } from "./Project";
import { Container, ProjectsContainer } from "./style";

export function Projects() {
  return (
    <Container>
      <h2 id="projects">Projetos</h2>
      <ProjectsContainer>
        <Project
          name="Em breve"
          description="Logo mais um novo projeto irá aparecer por aqui!"
        />
        <Project
          name="Em breve"
          description="Logo mais um novo projeto irá aparecer por aqui!"
        />
        <Project
          name="Em breve"
          description="Logo mais um novo projeto irá aparecer por aqui!"
        />
      </ProjectsContainer>
      <a
        href="https://github.com/Saesel?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        Repositórios no GitHub
      </a>
    </Container>
  );
}
