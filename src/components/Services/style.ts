import styled from "styled-components";

export const Container = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  text-align: center;
`;

export const ServicesContainer = styled.ul`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Service = styled.li`
  width: 350px;
  height: 240px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 0.25rem;
  border: 1px solid var(--grey);
  border-bottom: 5px solid var(--primary);
  background-color: #212121;
  transition: 400ms;
  opacity: 0.7;

  svg {
    width: 48px;
    fill: var(--primary);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5;
    color: var(--white);
  }

  p {
    font-size: 0.9rem;
    text-align: left;
    color: var(--text);
  }

  :hover {
    transform: translateY(-8px);
    opacity: 1;
  }
`;
