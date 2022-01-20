import styled from "styled-components";

export const Container = styled.section`
  max-width: 1180px;
  margin: 90px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSide = styled.div`
  h1 {
    font-weight: 400;
    font-size: 1.25rem;
  }

  span {
    color: var(--text);

    :last-child {
      color: var(--white);
    }
  }
`;

export const Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;

  button {
    width: 140px;
    height: 42px;
    border-radius: 0.1rem;
    cursor: pointer;
    font-weight: 500;

    a {
      width: 48px;
      height: 48px;
    }

    :first-child {
      border: none;
      background-color: var(--primary);
      color: var(--white);
      transition: 400ms;

      :hover {
        background-color: #5b6eae;
      }
    }

    :last-child {
      border: 1px solid var(--grey);
      background: none;
      color: var(--white);
      transition: 400ms;

      :hover {
        background-color: var(--grey);
      }
    }
  }
`;

export const RightSide = styled.div`
  img {
    display: block;
  }
`;
