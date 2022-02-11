import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.75);
  color: var(--white);
  z-index: 3;
  transition: all 400ms ease;
`;
