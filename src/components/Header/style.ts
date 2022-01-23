import styled from "styled-components";

export const Container = styled.header`
  max-width: 1180px;
  margin: 0 auto;
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 426px) {
    max-width: 80%;
  }
`;

export const Menu = styled.nav`
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

  @media (max-width: 426px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.nav`
  width: 30px;
  height: 3px;
  position: relative;
  border-radius: 0.25rem;
  background-color: white;
  display: none;

  :after {
    content: "";
    width: 30px;
    height: 3px;
    margin: 8px 0;
    position: absolute;
    border-radius: 0.25rem;
    background-color: white;
  }

  :before {
    content: "";
    width: 30px;
    height: 3px;
    margin: -8px 0;
    position: absolute;
    border-radius: 0.25rem;
    background-color: white;
  }

  @media (max-width: 426px) {
    display: block;
  }
`;
