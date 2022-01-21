import styled from "styled-components";

export const Container = styled.li`
  width: 300px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border: 1px solid var(--grey);
  border-radius: 0.25rem;
  background-color: var(--dark-grey);
  transition: 400ms;
  opacity: 0.7;

  p {
    color: var(--text);
    font-family: "Rubik";
  }

  :hover {
    opacity: 1;
    transform: translateY(-8px);
  }
`;
