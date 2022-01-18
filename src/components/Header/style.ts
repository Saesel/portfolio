import styled from "styled-components";

export const Container = styled.header`
  max-width: 1180px;
  margin: 0 auto;
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  a {
    position: relative;

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
