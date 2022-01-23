import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 4;
  transition: all 200ms ease;

  a {
    font-size: 2rem;

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
