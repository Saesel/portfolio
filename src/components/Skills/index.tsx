import {
  Html5,
  Css3,
  Sass,
  Javascript,
  Typescript,
  ReactLogo,
  Styledcomponents,
} from "@styled-icons/simple-icons";
import { Container, Skill, SkillsContainer } from "./style";

export function Skills() {
  return (
    <Container>
      <h2 id="skills">Conhecimentos</h2>
      <SkillsContainer>
        <Skill>
          <Html5 />
          <span className="skillName">HTML 5</span>
        </Skill>
        <Skill>
          <Css3 />
          <span className="skillName">CSS 3</span>
        </Skill>
        <Skill>
          <Sass />
          <span className="skillName">SASS</span>
        </Skill>
        <Skill>
          <Javascript />
          <span className="skillName">JavaScript</span>
        </Skill>
        <Skill>
          <Typescript />
          <span className="skillName">TypeScript</span>
        </Skill>
        <Skill>
          <ReactLogo />
          <span className="skillName">ReactJS</span>
        </Skill>
        <Skill>
          <Styledcomponents />
          <span className="skillName">Styled Components</span>
        </Skill>
      </SkillsContainer>
    </Container>
  );
}
