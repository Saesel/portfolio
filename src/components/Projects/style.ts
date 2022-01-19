import styled from "styled-components";

export const Container = styled.section`
  max-width: 1180px;
  margin: 100px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    margin-top: 2rem;
    position: relative;
    font-size: 1.1rem;

    :after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      top: 100%;
      left: 0;
      transform: scaleX(0);
      transform-origin: right;
      background-color: var(--primary);
      transition: transform 400ms;
    }

    :hover:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

export const ProjectsContainer = styled.ul`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5rem;
`;

export const Project = styled.li`
  width: 300px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-radius: 0.25rem;
  background-color: var(--dark-grey);
  transition: 400ms;

  p {
    color: var(--text);
    font-family: "Rubik";
  }
`;
