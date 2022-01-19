import styled from "styled-components";

export const Container = styled.section`
  max-width: 1180px;
  margin: 100px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SkillsContainer = styled.ul`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export const Skill = styled.li`
  font-size: 30px;
  padding: 2rem;
  border-radius: 0.25rem;
  border: 1px solid var(--grey);
  background-color: var(--dark-grey);
  color: var(--primary);
  transition: 400ms;
  opacity: 0.7;
  position: relative;

  i {
    font-size: 70px;
    color: var(--primary);
  }

  :hover {
    transform: translateY(-8px);
    opacity: 1;
  }

  .skillName {
    width: 100%;
    padding: 0.4rem 0;
    position: absolute;
    top: 110%;
    left: 0%;
    border-radius: 0.25rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    background-color: var(--dark-grey);
    transition: all 400ms ease;
    opacity: 0;
    color: var(--primary);
  }

  :hover span {
    opacity: 1;
  }
`;
