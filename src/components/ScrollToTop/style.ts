import styled from "styled-components";

export const Button = styled.img`
  padding: 0.75rem;
  border-radius: 0.25rem;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  background-color: var(--dark-grey);
  transition: all 200ms ease;
  z-index: 3;

  :hover {
    background-color: #1e1e1e;
  }
`;
