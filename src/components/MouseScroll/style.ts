import styled from "styled-components";

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  img {
    width: 120px;
    transition: all 400ms ease;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
