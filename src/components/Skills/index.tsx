import { Container, Skill, SkillsContainer } from "./style";

export function Skills() {
  return (
    <Container>
      <h2>Conhecimentos</h2>
      <SkillsContainer>
        <Skill>
          <i className="devicon-html5-plain"></i>
          <span className="skillName">HTML 5</span>
        </Skill>
        <Skill>
          <i className="devicon-css3-plain"></i>
          <span className="skillName">CSS 3</span>
        </Skill>
        <Skill>
          <i className="devicon-javascript-plain"></i>
          <span className="skillName">JavaScript</span>
        </Skill>
        <Skill>
          <i className="devicon-typescript-original"></i>
          <span className="skillName">TypeScript</span>
        </Skill>
        <Skill>
          <i className="devicon-react-original"></i>
          <span className="skillName">React</span>
        </Skill>
        <Skill>
          <i className="devicon-sass-original"></i>
          <span className="skillName">Sass</span>
        </Skill>
      </SkillsContainer>
    </Container>
  );
}
